<svelte:options
  customElement={{
    tag: "pc-slider",
    props: {
      horizontalCount: { type: "Number", attribute: "horizontal-count" },
    },
  }}
/>

<script lang="ts">
  import { onMount } from "svelte";
  import { findFirstFocusableElement } from "$lib/functions/utils";

  let { horizontalCount = 2 } = $props<{
    horizontalCount?: string;
  }>();

  let sliderComponent: HTMLElement;
  let sliderContainer: HTMLElement;

  let header = $state<HTMLElement | null>(null);
  let buttons = $state<NodeListOf<HTMLButtonElement> | null>(null);

  let itemsSlotContent = $state<HTMLElement | null>(null);
  let list = $state<HTMLElement | null>(null);
  let items = $state<HTMLElement[] | null>(null);

  let scrollPaddingLeft = $state(0);

  let currentItemKey = $state<number>(0);
  let currentHorizontalCount = $state(horizontalCount);

  let isResizing = $state(false);

  //////////////////////////////////////////
  const initSlider = () => {
    if (!buttons || !list) {
      return;
    }

    // revert no-JavaScript styles
    list.style.overflow = "initial";
    list.style.width = "fit-content";

    buttons.forEach((button) => {
      button.style.display = "block";
      if (list) button.setAttribute("aria-controls", list.id);
    });
    buttons[0].addEventListener("click", scrollLeft);
    buttons[1].addEventListener("click", scrollRight);
    sliderContainer.style.setProperty("--_scroll-bar-width", "none");

    items?.forEach((item, index) => {
      const isActive = index === currentItemKey;

      const focusableIElement = findFirstFocusableElement(item);
      if (!focusableIElement) {
        return;
      }
      focusableIElement.tabIndex = isActive ? 0 : -1;

      item.addEventListener("keyup", setKeyboardNav);

      item.style.scrollSnapAlign = "start";
      item.setAttribute("aria-roledescription", "slide");
      item.role = "group";
      if (items && items.length > 0) {
        item.ariaLabel = `${index + 1} of ${items.length}`;
      }
    });

    setSliderPadding();
  };

  const disableSlider = () => {
    if (!buttons || !list || !items) {
      return;
    }

    buttons.forEach((button) => {
      button.style.display = "";
      button.removeAttribute("aria-controls");
    });
    buttons[0].removeEventListener("click", scrollLeft);
    buttons[1].removeEventListener("click", scrollRight);
    sliderContainer.style.setProperty("--_scroll-bar-width", "initial");

    sliderContainer.style.removeProperty("--_scroll-padding-left");
    sliderContainer.style.removeProperty("--_scroll-snap-type");
    list.style.overflow = "";
    list.style.width = "";

    items[items.length - 1].style.marginRight = "";
    items?.forEach((item) => {
      const focusableIElement = findFirstFocusableElement(item);
      if (!focusableIElement) {
        return;
      }
      focusableIElement.tabIndex = 0;

      item.removeEventListener("keyup", setKeyboardNav);
      item.style.scrollSnapAlign = "";
      item.removeAttribute("aria-roledescription");
      item.removeAttribute("role");
      item.removeAttribute("aria-label");
    });
  };

  const setSliderPadding = () => {
    if (!itemsSlotContent || !items) {
      return;
    }

    const slotLeft = itemsSlotContent.getBoundingClientRect().left;
    const firstItemLeft = items[0].getBoundingClientRect().left;

    scrollPaddingLeft = Math.abs(firstItemLeft - slotLeft);
    sliderContainer.style.setProperty("--_scroll-padding-left", `${scrollPaddingLeft}px`);
    sliderContainer.style.setProperty("--_scroll-snap-type", "x mandatory");

    const lastItem = items[items.length - 1];
    const lastItemRight = lastItem.getBoundingClientRect().right;
    const lastItemLeft = lastItem.getBoundingClientRect().left;

    if (items.length < currentHorizontalCount) {
      return;
    }

    currentHorizontalCount = horizontalCount;

    const lastHorizontalCountLeft = items[items.length - currentHorizontalCount].getBoundingClientRect().left;
    let horizontalCountWidth = lastItemRight - lastHorizontalCountLeft;
    const carouselContainerWidth = sliderContainer.clientWidth;

    while (horizontalCountWidth > carouselContainerWidth) {
      currentHorizontalCount -= 1;

      const newLastHorizontalCountLeft = items[items.length - currentHorizontalCount].getBoundingClientRect().left;
      horizontalCountWidth = lastItemRight - newLastHorizontalCountLeft;
    }

    const itemWidth = lastItemRight - lastItemLeft;
    const marginRight = carouselContainerWidth - (scrollPaddingLeft + itemWidth);
    lastItem.style.marginRight = `${marginRight}px`;
  };

  //////////////////////////////////////////
  const scrollLeft = () => {
    const newCurrentItemKey =
      currentHorizontalCount * Math.ceil(currentItemKey / currentHorizontalCount) - currentHorizontalCount;

    scrollToItem(newCurrentItemKey);
  };

  const scrollRight = () => {
    const newCurrentItemKey =
      currentHorizontalCount * Math.floor(currentItemKey / currentHorizontalCount) + currentHorizontalCount;

    scrollToItem(newCurrentItemKey);
  };

  const scrollToItem = (itemKey: number) => {
    if (!items) {
      return;
    }

    const currentItemFocusableElement = findFirstFocusableElement(items[currentItemKey]);
    if (!currentItemFocusableElement) {
      return;
    }
    currentItemFocusableElement.tabIndex = -1;

    const item = items[itemKey];
    if (!item) {
      return;
    }

    const itemFocusableElement = findFirstFocusableElement(item);
    if (!itemFocusableElement) {
      return;
    }
    itemFocusableElement.tabIndex = 0;

    const scrollLeftTarget = item.getBoundingClientRect().left - scrollPaddingLeft + sliderContainer.scrollLeft;
    sliderContainer.scrollTo({
      left: scrollLeftTarget,
      behavior: "smooth",
    });

    currentItemKey = itemKey;
  };

  const setCurrentItemKey = () => {
    if (!items) {
      return;
    }

    const currentItemFocusableElement = findFirstFocusableElement(items[currentItemKey]);
    if (!currentItemFocusableElement) {
      return;
    }
    currentItemFocusableElement.tabIndex = -1;

    items.forEach((item, index) => {
      const itemLeft = item.getBoundingClientRect().left;
      if (itemLeft === scrollPaddingLeft) {
        currentItemKey = index;

        const itemFocusableElement = findFirstFocusableElement(item);
        if (!itemFocusableElement) {
          return;
        }
        itemFocusableElement.tabIndex = 0;
      }
    });
  };

  const setKeyboardNav = (e: KeyboardEvent) => {
    if (!items) {
      return;
    }

    const item = e.currentTarget as HTMLElement;
    const index = items.indexOf(item);

    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") {
      return;
    }

    e.preventDefault();

    let targetIndex = index;
    if (e.key === "ArrowRight") targetIndex += 1;
    if (e.key === "ArrowLeft") targetIndex -= 1;

    const targetItem = items[targetIndex];
    if (!targetItem) {
      return;
    }

    const focusableTargetElement = findFirstFocusableElement(targetItem);
    if (!focusableTargetElement) {
      return;
    }

    focusableTargetElement.tabIndex = 0;
    focusableTargetElement.focus();
    scrollToItem(targetIndex);
  };

  //////////////////////////////////////////
  const onScrollEnd = (element: HTMLElement, callback: () => void, delay = 150) => {
    if ("onscrollend" in document.createElement("div")) {
      element.addEventListener("scrollend", callback);
      return () => element.removeEventListener("scrollend", callback);
    }

    let timeout: ReturnType<typeof setTimeout> | undefined;
    const scrollHandler = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback();
      }, delay);
    };
    element.addEventListener("scroll", scrollHandler);
    return () => {
      clearTimeout(timeout);
      element.removeEventListener("scroll", scrollHandler);
    };
  };

  onMount(() => {
    const HeaderSlot = sliderComponent?.querySelector('slot[name="header"]');
    const itemsSlot = sliderComponent?.querySelector('slot[name="items"]');

    if (!(HeaderSlot instanceof HTMLSlotElement)) {
      return;
    }

    if (!(itemsSlot instanceof HTMLSlotElement)) {
      return;
    }

    header = HeaderSlot.assignedElements()[0] as HTMLElement;
    buttons = header.querySelectorAll("button");

    itemsSlotContent = itemsSlot.assignedElements()[0] as HTMLElement;
    list = itemsSlotContent.querySelector("ul");
    if (list) items = Array.from(list.querySelectorAll(":scope > li"));

    initSlider();

    let resizeTimeout: ReturnType<typeof setTimeout> | undefined;
    const carouselContainerObserver = new ResizeObserver(() => {
      isResizing = true;
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        isResizing = false;
        setSliderPadding();
      }, 150);
    });
    carouselContainerObserver.observe(sliderContainer);

    const cleanupScrollEnd = onScrollEnd(sliderContainer, () => {
      if (!isResizing) setCurrentItemKey();
    });

    return () => {
      disableSlider();
      clearTimeout(resizeTimeout);
      carouselContainerObserver.disconnect();
      cleanupScrollEnd();
    };
  });
</script>

<div bind:this={sliderComponent} role="region" aria-roledescription="carousel">
  <slot name="header"></slot>

  <div class="slider-container" bind:this={sliderContainer} aria-live="polite">
    <slot name="items"></slot>
  </div>
</div>

<style>
  .slider-container {
    width: 100%;
    scrollbar-width: var(--_scroll-bar-width, initial);
    scroll-behavior: smooth;
    overflow-x: var(--pc-carousel-container-overflowx, scroll);

    scroll-snap-type: var(--_scroll-snap-type, initial);
    scroll-padding-left: var(--pc-scroll-padding-left, var(--_scroll-padding-left, initial));
  }
</style>
