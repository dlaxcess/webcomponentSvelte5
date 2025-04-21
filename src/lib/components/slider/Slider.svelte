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

  onMount(() => {
    const HeaderSlot = sliderComponent?.querySelector('slot[name="header"]');
    const itemsSlot = sliderComponent?.querySelector('slot[name="items"]');

    if (!(HeaderSlot instanceof HTMLSlotElement)) return;
    if (!(itemsSlot instanceof HTMLSlotElement)) return;

    header = HeaderSlot.assignedElements()[0] as HTMLElement;
    buttons = header.querySelectorAll("button");

    itemsSlotContent = itemsSlot.assignedElements()[0] as HTMLElement;
    list = itemsSlotContent.querySelector("ul");
    if (list) items = Array.from(list.querySelectorAll("li"));

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

    onScrollEnd(sliderContainer, () => {
      if (!isResizing) setCurrentITemKey();
    });

    //////////////////////////////
    // Foucus
    //////////////////////////////
    // items.forEach((item, index) => {
    //   item.addEventListener("keyup", (e) => {
    //     if (!items) return;
    //     e.preventDefault();
    //     console.log("Item focused:", e.key);
    //     let targetIndex = index;
    //     if (e.key === "ArrowRight") targetIndex += 1;
    //     if (e.key === "ArrowLeft") targetIndex -= 1;
    //     items[targetIndex].tabIndex = 0;
    //     items[targetIndex].focus();
    //     scrollToItem(targetIndex);
    //   });
    // });

    return () => {
      clearTimeout(resizeTimeout);
      carouselContainerObserver.disconnect();
      disableSlider();
    };
  });

  //////////////////////////////////////////
  const initSlider = () => {
    if (!buttons || !list) return;

    buttons.forEach((button) => (button.style.display = "block"));
    buttons[0].addEventListener("click", scrollLeft);
    buttons[1].addEventListener("click", scrollRight);

    // Override direct items parent styles that was setted in case of Javascript disabled in browser
    list.style.overflow = "initial";
    list.style.width = "fit-content";

    items?.forEach((item) => {
      item.setAttribute("aria-roledescription", "slide");
    });

    ///////////////////
    // items?.forEach((item, index) => {
    //   const isActive = index === currentItemKey;

    //   const links = item.querySelectorAll("a");
    //   links.forEach((link) => {
    //     link.tabIndex = isActive ? 0 : -1;
    //   });
    // });
    ////////////////////////

    setSliderPadding();
  };

  const disableSlider = () => {
    if (!buttons || !list || !items) return;

    buttons.forEach((button) => (button.style.display = ""));
    buttons[0].removeEventListener("click", scrollLeft);
    buttons[1].removeEventListener("click", scrollRight);

    items?.forEach((item) => {
      item.removeAttribute("aria-roledescription");
    });

    sliderContainer.style.setProperty("--_scroll-padding-left", "0px");
    list.style.width = "";
    list.style.overflow = "";
    items[items.length - 1].style.marginRight = "";
  };

  //////////////////////////////////////////
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
    const item = items[itemKey];
    if (!item) return;

    // item.tabIndex = 0;
    const scrollLeftTarget = item.getBoundingClientRect().left - scrollPaddingLeft + sliderContainer.scrollLeft;

    sliderContainer.scrollTo({
      left: scrollLeftTarget,
      behavior: "smooth",
    });

    currentItemKey = itemKey;
  };

  //////////////////////////////////////////
  const setCurrentITemKey = () => {
    if (!items) return;

    items.forEach((item, index) => {
      const itemLeft = item.getBoundingClientRect().left;
      if (itemLeft === scrollPaddingLeft) {
        currentItemKey = index;
      }
    });
  };

  //////////////////////////////////////////
  const onScrollEnd = (element: HTMLElement, callback: () => void, delay = 150) => {
    if ("onscrollend" in document.createElement("div")) {
      // ✅ Support natif
      element.addEventListener("scrollend", callback);
    } else {
      // 🔁 Fallback
      let timeout: ReturnType<typeof setTimeout> | undefined;
      element.addEventListener("scroll", () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          callback();
        }, delay);
      });
    }
  };
</script>

<div bind:this={sliderComponent}>
  <slot name="header"></slot>

  <div class="slider-container" bind:this={sliderContainer}>
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
