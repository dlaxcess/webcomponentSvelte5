<svelte:options customElement="pc-responsive-container" />

<script lang="ts">
  import '../carousel/Carousel.svelte';
  import '../dropdown/Dropdown.svelte';

  let { breakpoint = 768 } = $props<{ breakpoint?: number }>();

  let isCarouselMode = $state(false);

  function updateLayout() {
    isCarouselMode = window.innerWidth > breakpoint;
  }

  $effect(() => {
    // Initial layout update
    updateLayout();

    // Add resize listener
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  });
</script>

{#if isCarouselMode}
  <pc-carousel>
    <slot name="title" slot="title"></slot>
    <slot name="items" slot="items"></slot>
  </pc-carousel>
{:else}
  <pc-dropdown>
    <slot name="title" slot="title"></slot>
    <slot name="items" slot="items"></slot>
  </pc-dropdown>
{/if}

<style>
  :host {
    display: block;
    width: 100%;
  }
</style>
