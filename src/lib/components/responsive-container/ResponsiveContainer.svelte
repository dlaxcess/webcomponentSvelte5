<svelte:options customElement="pc-responsive-container" />

<script lang="ts">
  import Carousel from '../carousel/Carousel.svelte';
  import Dropdown from '../dropdown/Dropdown.svelte';
  import type { CarouselProps, DropdownProps, ContainerProps } from './types';

  const props = $props();
  const { 
    carouselProps = {},
    dropdownProps = {},
    containerProps = { breakpoint: 768 }
  } = props as {
    carouselProps?: CarouselProps & Record<string, never>;
    dropdownProps?: DropdownProps & Record<string, never>;
    containerProps?: ContainerProps & Record<string, never>;
  };

  let Component = $state<typeof Carousel | typeof Dropdown>(Carousel);
  let currentProps = $state<(CarouselProps & Record<string, never>) | (DropdownProps & Record<string, never>)>(carouselProps);

  function updateLayout() {
    const breakpoint = containerProps.breakpoint ?? 768;
    Component = window.innerWidth > breakpoint ? Carousel : Dropdown;
    currentProps = Component === Carousel ? carouselProps : dropdownProps;
  }

  $effect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  });
</script>

<Component {...currentProps}>
  <slot name="title" slot="title"></slot>
  <slot name="items" slot="items"></slot>
</Component>

<style>
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
