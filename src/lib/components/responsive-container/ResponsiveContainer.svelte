<svelte:options customElement="pc-responsive-container" />

<script lang="ts">
  import type { ResponsiveContainerProps } from "./types";
  import type { CarouselProps } from "../carousel/types";
  import type { DropdownProps } from "../dropdown/types";
  import Carousel from "../carousel/Carousel.svelte";
  import Dropdown from "../dropdown/Dropdown.svelte";
  import { onMount } from "svelte";

  let {
    breakpoint,
    verticalCount = 3,
    horizontalCount = 2,
  } = $props<{
    breakpoint?: string;
    verticalCount?: number;
    horizontalCount?: number;
  }>();

  let activeBreakpoint = $state("480px");
  let query = $state<MediaQueryList | null>(null);

  let Component = $state<typeof Carousel | typeof Dropdown>(Carousel);

  const updateComponent = (matchQuery: boolean) => {
    Component = matchQuery ? Carousel : Dropdown;
  };

  onMount(() => {
    const cssBreakpointVarValue = getComputedStyle($host()).getPropertyValue("--breakpoint").trim();
    activeBreakpoint = cssBreakpointVarValue || breakpoint;

    query = query = matchMedia(`(min-width: ${activeBreakpoint})`);
    updateComponent(query.matches);

    const handler = (e: MediaQueryListEvent) => updateComponent(e.matches);
    query.addEventListener("change", handler);

    return () => {
      return () => query?.removeEventListener("change", handler);
    };
  });
</script>

<Component>
  <slot name="header" slot="header"></slot>
  <slot name="items" slot="items"></slot>
  <slot name="show-more" slot="show-more"></slot>
  <slot name="show-less" slot="show-less"></slot>
</Component>

<style>
  /* :host {
    display: block;
    width: 100%;
    height: 100%;
  } */
</style>
