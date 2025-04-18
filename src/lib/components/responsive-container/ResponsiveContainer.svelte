<svelte:options customElement="pc-responsive-container" />

<script lang="ts">
  import type { CarouselProps } from "../carousel/types";
  import type { DropdownProps } from "../dropdown/types";
  import type { ResponsiveContainerProps } from "./types";
  import Carousel from "../carousel/Carousel.svelte";
  import Dropdown from "../dropdown/Dropdown.svelte";
  import { onMount } from "svelte";

  let { breakpoint = "480px", verticalCount = "3", horizontalCount = "2" } = $props();

  let activeBreakpoint = $state(breakpoint);
  let query = $state<MediaQueryList | null>(null);

  let Component = $state<any>(Carousel);
  let componentProps = $derived(Component === Carousel ? { horizontalCount } : { verticalCount });

  const updateComponent = (matchQuery: boolean) => {
    Component = matchQuery ? Carousel : Dropdown;
  };

  onMount(() => {
    const cssBreakpointVarValue = getComputedStyle($host()).getPropertyValue("--breakpoint").trim();
    if (cssBreakpointVarValue) {
      activeBreakpoint = cssBreakpointVarValue;
    }

    query = matchMedia(`(min-width: ${activeBreakpoint})`);
    updateComponent(query.matches);

    const handler = (e: MediaQueryListEvent) => updateComponent(e.matches);
    query.addEventListener("change", handler);

    return () => {
      query?.removeEventListener("change", handler);
    };
  });
</script>

<Component {...componentProps}>
  <slot name="header" slot="header"></slot>
  <slot name="items" slot="items"></slot>
  <slot name="show-more" slot="show-more"></slot>
  <slot name="show-less" slot="show-less"></slot>
</Component>

<style>
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
