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
    if (!buttons || !list) return;

    buttons.forEach((button) => {
      button.style.display = "block";
      if (list) button.setAttribute("aria-controls", list.id);
    });
    buttons[0].addEventListener("click", scrollLeft);
    buttons[0].ariaLabel = "Previous";
    buttons[1].addEventListener("click", scrollRight);
    buttons[1].ariaLabel = "next";

    // Override direct items parent styles that was setted in case of Javascript disabled in browser
    list.style.overflow = "initial";
    list.style.width = "fit-content";

    // Set keyboard navigation and assistive attributes
    items?.forEach((item, index) => {
      const isActive = index === currentItemKey;

      const focusableIElement = getFocusableElement(item);
      focusableIElement.tabIndex = isActive ? 0 : -1;

      item.addEventListener("keyup", setKeyboardNav);

      item.style.scrollSnapAlign = "start";
      item.setAttribute("aria-roledescription", "slide");
      item.role = "group";
      if (items && items.length > 0) {
        item.ariaLabel = `${index + 1} of ${items.length + 1}`;
      }
    });

    setSliderPadding();
  };

  const disableSlider = () => {
    if (!buttons || !list || !items) return;

    buttons.forEach((button) => {
      button.style.display = "";
      button.removeAttribute("aria-controls");
      button.removeAttribute("aria-label");
    });
    buttons[0].removeEventListener("click", scrollLeft);
    buttons[1].removeEventListener("click", scrollRight);

    sliderContainer.style.setProperty("--_scroll-padding-left", "0px");
    items[items.length - 1].style.marginRight = "";
    list.style.overflow = "";
    list.style.width = "";

    items?.forEach((item) => {
      const focusableIElement = getFocusableElement(item);
      focusableIElement.tabIndex = 0;

      item.removeEventListener("keyup", setKeyboardNav);

      item.style.scrollSnapAlign = "";
      item.removeAttribute("aria-roledescription");
      item.removeAttribute("role");
      item.removeAttribute("aria-label");
    });
  };

  const setSliderPadding = () => {
    if (!itemsSlotContent || !items) return;
    const slotLeft = itemsSlotContent.getBoundingClientRect().left;
    const firstItemLeft = items[0].getBoundingClientRect().left;

    scrollPaddingLeft = Math.abs(firstItemLeft - slotLeft);
    sliderContainer.style.setProperty("--_scroll-padding-left", `${scrollPaddingLeft}px`);

    if (items.length >= currentHorizontalCount) {
      currentHorizontalCount = horizontalCount;

      const lastItem = items[items.length - 1];
      const lastItemRight = lastItem.getBoundingClientRect().right;
      const lastHorizontalCountLeft = items[items.length - currentHorizontalCount].getBoundingClientRect().left;
      let horizontalCountWidth = lastItemRight - lastHorizontalCountLeft;
      const carouselContainerWidth = sliderContainer.clientWidth;

      while (horizontalCountWidth > carouselContainerWidth) {
        currentHorizontalCount -= 1;

        const newLastHorizontalCountLeft = items[items.length - currentHorizontalCount].getBoundingClientRect().left;
        horizontalCountWidth = lastItemRight - newLastHorizontalCountLeft;
      }

      const marginRight = carouselContainerWidth - (scrollPaddingLeft + horizontalCountWidth);
      lastItem.style.marginRight = `${marginRight}px`;
    }
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
    if (!items) return;
    getFocusableElement(items[currentItemKey]).tabIndex = -1;

    const item = items[itemKey];
    if (!item) return;

    getFocusableElement(item).tabIndex = 0;
    const scrollLeftTarget = item.getBoundingClientRect().left - scrollPaddingLeft + sliderContainer.scrollLeft;
    sliderContainer.scrollTo({
      left: scrollLeftTarget,
      behavior: "smooth",
    });

    currentItemKey = itemKey;
  };

  const setCurrentITemKey = () => {
    if (!items) return;
    getFocusableElement(items[currentItemKey]).tabIndex = -1;

    items.forEach((item, index) => {
      const itemLeft = item.getBoundingClientRect().left;
      if (itemLeft === scrollPaddingLeft) {
        currentItemKey = index;

        getFocusableElement(item).tabIndex = 0;
      }
    });
  };

  const setKeyboardNav = (e: KeyboardEvent) => {
    if (!items) return;
    const item = e.currentTarget as HTMLElement;
    const index = items.indexOf(item);

    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();

      let targetIndex = index;
      if (e.key === "ArrowRight") targetIndex += 1;
      if (e.key === "ArrowLeft") targetIndex -= 1;

      const targetItem = items[targetIndex];
      if (targetItem) {
        const kbTargetItem = getFocusableElement(targetItem);
        kbTargetItem.tabIndex = 0;
        kbTargetItem.focus();
        scrollToItem(targetIndex);
      }
    }
  };

  const getFocusableElement = (item: HTMLElement): HTMLElement => {
    // Sélectionne le premier élément focusable dans l'item
    const focusable = item.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    return focusable as HTMLElement;
  };

  //////////////////////////////////////////
  const onScrollEnd = (element: HTMLElement, callback: () => void, delay = 150) => {
    if ("onscrollend" in document.createElement("div")) {
      element.addEventListener("scrollend", callback);
      return () => element.removeEventListener("scrollend", callback);
    } else {
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
    }
  };

  onMount(() => {
    const HeaderSlot = sliderComponent?.querySelector('slot[name="header"]');
    const itemsSlot = sliderComponent?.querySelector('slot[name="items"]');

    if (!(HeaderSlot instanceof HTMLSlotElement)) return;
    if (!(itemsSlot instanceof HTMLSlotElement)) return;

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
      if (!isResizing) setCurrentITemKey();
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
    scrollbar-width: none;
    scroll-behavior: smooth;
    overflow-x: var(--pc-carousel-container-overflowx, scroll);

    scroll-snap-type: x mandatory;
    scroll-padding-left: var(--pc-scroll-padding-left, var(--_scroll-padding-left));
  }
</style>
