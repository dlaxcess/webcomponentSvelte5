<svelte:options customElement="pc-responsive-container" />

<script lang="ts">
  import Carousel from '../carousel/Carousel.svelte';
  import Dropdown from '../dropdown/Dropdown.svelte';

  type ResponsiveComponent = typeof Carousel | typeof Dropdown;

  let { breakpoint = 768 } = $props<{ breakpoint?: number }>();
  let Component = $state<ResponsiveComponent>(Carousel);

  function updateLayout() {
    Component = window.innerWidth > breakpoint ? Carousel : Dropdown;
  }

  $effect(() => {
    // Initial layout update
    updateLayout();

    // Add resize listener
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  });
</script>

<Component>
  <slot name="title" slot="title"></slot>
  <slot name="items" slot="items"></slot>
</Component>

<style>
  :host {
    display: block;
    width: 100%;
  }
</style>
