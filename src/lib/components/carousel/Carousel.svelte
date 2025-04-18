<svelte:options customElement="pc-carousel" />

<script lang="ts">
  import type { CarouselProps } from "./types";
  import { onMount } from "svelte";

  let { horizontalCount: horizontalCountProp = "2" } = $props();

  let horizontalCount = $derived(Number(horizontalCountProp));

  let currentItemKey = $state<number>(0);

  let carousel: HTMLElement;
  let carouselContainer: HTMLElement;

  let header = $state<HTMLElement | null>(null);
  let buttons = $state<NodeListOf<HTMLButtonElement> | null>(null);

  let content = $state<HTMLElement | null>(null);
  let itemsContainer = $state<HTMLElement | null>(null);
  let items = $state<HTMLElement[] | null>(null);

  let startItemsLeft = $state(0);

  let currentHorizontalCount = $state(horizontalCount);

  let isResizing = $state(false);

  function scrollLeft() {
    const newCurrentItemKey =
      currentHorizontalCount * Math.ceil(currentItemKey / currentHorizontalCount) - currentHorizontalCount;

    scrollToItem(newCurrentItemKey);
  }

  function scrollRight() {
    const newCurrentItemKey =
      currentHorizontalCount * Math.floor(currentItemKey / currentHorizontalCount) + currentHorizontalCount;

    scrollToItem(newCurrentItemKey);
  }

  const onResizeToMobWide = (isMobWide: boolean) => {
    isMobWide ? initCarousel() : disableCarousel();
  };

  onMount(() => {
    const HeaderSlot = carousel?.querySelector('slot[name="header"]');
    const ContentSlot = carousel?.querySelector('slot[name="items"]');

    if (!(HeaderSlot instanceof HTMLSlotElement)) return;
    if (!(ContentSlot instanceof HTMLSlotElement)) return;

    header = HeaderSlot.assignedElements()[0] as HTMLElement;
    buttons = header.querySelectorAll("button");

    content = ContentSlot.assignedElements()[0] as HTMLElement;
    items = Array.from(content.querySelectorAll(".item"));
    itemsContainer = items[0].parentElement;

    initCarousel();

    let resizeTimeout: ReturnType<typeof setTimeout> | undefined;
    const carouselContainerObserver = new ResizeObserver(() => {
      isResizing = true;

      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        console.log("Resize terminé !");
        isResizing = false;

        setCarouselPadding();
      }, 150);
    });

    carouselContainerObserver.observe(carouselContainer);

    onScrollEnd(carouselContainer, () => {
      console.log("Scroll terminé !");
      // snapToClosestItem();
      if (!isResizing) setCurrentITemKey();
    });

    // items.forEach((item, index) => {
    //   item.addEventListener("focusin", (e) => {
    //     console.log("Item focused:", index);
    //     scrollToItem(index);
    //   });
    // });

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
      disableCarousel();
      console.log("carousel killed");
    };
  });
  //////////////////////////////////////////
  const setCarouselPadding = () => {
    // alert("Set padding !");
    if (!content || !items) return;
    const slotLeft = content.getBoundingClientRect().left;
    const firstItemLeft = items[0].getBoundingClientRect().left;

    // const newStartItemLeft = Math.abs(firstItemLeft - slotLeft);
    // if (newStartItemLeft !== startItemsLeft) {
    //   startItemsLeft = newStartItemLeft;
    startItemsLeft = Math.abs(firstItemLeft - slotLeft);

    carouselContainer.style.setProperty("--_scroll-padding-left", `${startItemsLeft}px`);
    // }

    if (items.length >= currentHorizontalCount) {
      currentHorizontalCount = horizontalCount;

      const lastItemRight = items[items.length - 1].getBoundingClientRect().right;

      const itemsPerScrollToLastLeft = items[items.length - currentHorizontalCount].getBoundingClientRect().left;

      let lastItemsWidth = lastItemRight - itemsPerScrollToLastLeft;

      const carouselContainerWidth = carouselContainer.clientWidth;

      while (lastItemsWidth > carouselContainerWidth) {
        currentHorizontalCount -= 1;

        const previousItemToLastLeft = items[items.length - currentHorizontalCount].getBoundingClientRect().left;

        lastItemsWidth = lastItemRight - previousItemToLastLeft;
      }

      const distance = carouselContainerWidth - (startItemsLeft + lastItemsWidth);

      // currentItem.parentElement.style.paddingRight = `${distance}px`;

      items[items.length - 1].style.marginRight = `${distance}px`;
      // content.style.marginRight = `${distance}px`;
      // carouselContainer.style.scrollPaddingLeft = `${startItemsLeft}px`;
      // carouselContainer.style.setProperty(
      //   "--_scroll-padding-right",
      //   `${distance}px`,
      // );
    }
  };
  //////////////////////////////////////////
  const initCarousel = () => {
    // alert("mode desktop !");
    if (!buttons || !itemsContainer) return;

    // Set button
    buttons.forEach((button) => (button.style.display = "block"));
    buttons[0].addEventListener("click", scrollLeft);
    buttons[1].addEventListener("click", scrollRight);

    // Override direct items parent styles that was setted in case of Javascript disabled in browser
    itemsContainer.style.overflow = "initial";
    itemsContainer.style.width = "fit-content";

    carouselContainer.style.overflowX = "scroll";

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

    // Set spacing dimension arround slides
    setCarouselPadding();
  };

  const disableCarousel = () => {
    // alert("mode mobile !");
    if (!buttons || !itemsContainer || !items) return;

    carouselContainer.style.overflowX = "initial";

    buttons.forEach((button) => (button.style.display = "none"));
    buttons[0].removeEventListener("click", scrollLeft);
    buttons[1].removeEventListener("click", scrollRight);

    items?.forEach((item) => {
      item.removeAttribute("aria-roledescription");
    });

    carouselContainer.style.setProperty("--_scroll-padding-left", "0px");
    itemsContainer.style.width = "100%";
    items[items.length - 1].style.marginRight = "0";
  };

  //////////////////////////////////////////
  const scrollToItem = (itemKey: number) => {
    if (!items) return;

    const item = items[itemKey];
    if (!item) return;

    // item.tabIndex = 0;
    const scrollLeftTarget = item.getBoundingClientRect().left - startItemsLeft + carouselContainer.scrollLeft;

    carouselContainer.scrollTo({
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
      if (itemLeft === startItemsLeft) {
        currentItemKey = index;
      }
    });
  };

  //////////////////////////////////////////
  // const snapToClosestItem = () => {
  //   if (!items) return;
  //   // const containerLeft = carouselContainer.getBoundingClientRect().left;
  //   if (items[currentItemKey].getBoundingClientRect().left === startItemsLeft)
  //     return;
  //   console.log("snaptoclosest");

  //   const closest = items.reduce((closestItem, item) => {
  //     const itemLeft = item.getBoundingClientRect().left;
  //     const distance = Math.abs(itemLeft - startItemsLeft);

  //     const closestLeft = closestItem.getBoundingClientRect().left;
  //     const closestDistance = Math.abs(closestLeft - startItemsLeft);

  //     return distance < closestDistance ? item : closestItem;
  //   });

  //   if (!closest) return;

  //   const closestItemKey = [...items].indexOf(closest);
  //   scrollToItem(closestItemKey);
  // };

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

<div class="carousel-wrapper" bind:this={carousel}>
  <slot name="header"></slot>

  <div class="carousel-container" bind:this={carouselContainer}>
    <slot name="items"></slot>

    <!-- <button>Afficher plus</button> -->
  </div>
</div>

<style>
  :host {
    display: block;
    width: var(--carousel-width);
    max-width: var(--carousel-max-width);
    --breakpoint: 480px;
  }

  .carousel-wrapper {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }

  .carousel-container {
    width: 100%;
    scrollbar-width: none;
    scroll-behavior: smooth;
    overflow-x: var(--pc-carousel-container-overflowx, scroll);

    scroll-snap-type: x mandatory;
    scroll-padding-left: var(--pc-scroll-padding-left, var(--_scroll-padding-left));
  }
</style>
