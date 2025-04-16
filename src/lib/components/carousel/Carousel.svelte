<svelte:options customElement="pc-carousel" />

<script lang="ts">
  import type { CarouselProps } from "./types";

  let { title = "" } = $props();

  let items = $state<Element[] | null>(null);
  let carouselContainer: HTMLElement;
  let scrollAmount = 0;
  const scrollStep = 200;

  function scrollLeft() {
    scrollAmount = Math.max(0, scrollAmount - scrollStep);
    carouselContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    scrollAmount = Math.min(carouselContainer.scrollWidth - carouselContainer.clientWidth, scrollAmount + scrollStep);
    carouselContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  $effect(() => {
    // Set default styles on the host element
    $host().style.setProperty("--carousel-width", "100%");
    $host().style.setProperty("--carousel-max-width", "100%");

    // Get items from the slot content
    const slot = carouselContainer?.querySelector('slot[name="items"]');
    if (slot instanceof HTMLSlotElement) {
      // Écouter les changements du slot
      slot.addEventListener('slotchange', (e) => {
        const assignedElements = slot.assignedElements();
        if (assignedElements.length > 0) {
          const parent = assignedElements[0];
          items = Array.from(parent.querySelectorAll(".item"));
        }
      });

      // Écouter les clics sur les éléments du slot
      slot.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.closest('.item')) {
          console.log('Item clicked:', target);
        }
      });
    }
  });
</script>

<div class="carousel-wrapper">
  <div class="carousel-header">
    <slot name="header"></slot>
    <div class="navigation-buttons">
      <button class="nav-button" onclick={scrollLeft}>&lt;</button>
      <button class="nav-button" onclick={scrollRight}>&gt;</button>
    </div>
  </div>

  <div class="carousel-container" bind:this={carouselContainer}>
    <div class="carousel-content">
      <slot name="items"></slot>
    </div>
  </div>
</div>

<style>
  :host {
    display: block;
    width: var(--carousel-width);
    max-width: var(--carousel-max-width);
  }

  .carousel-wrapper {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }

  .carousel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .navigation-buttons {
    display: flex;
    gap: 0.5rem;
  }

  .nav-button {
    background-color: var(--carousel-nav-bg, #f0f0f0);
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .nav-button:hover {
    background-color: var(--carousel-nav-hover-bg, #e0e0e0);
  }

  .carousel-container {
    width: 100%;
    overflow-x: scroll;
    position: relative;
    scrollbar-color: #026d90 #fff;
    scrollbar-width: thin;
  }

  .carousel-content {
    display: flex;
    gap: 1rem;
  }

  :global(.carousel-content > ::slotted(*)) {
    flex-shrink: 0;
  }
</style>
