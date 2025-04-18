<svelte:options
  customElement={{
    tag: "pc-responsive-container",
    props: {
      breakpoint: { type: "String" },
      verticalCount: { type: "Number", attribute: "vertical-count" },
      horizontalCount: { type: "Number", attribute: "horizontal-count" },
    },
  }}
/>

<script lang="ts">
  import Carousel from "../carousel/Carousel.svelte";
  import Dropdown from "../dropdown/Dropdown.svelte";
  import { onMount } from "svelte";

  let {
    breakpoint = "480px",
    verticalCount = 3,
    horizontalCount = 2,
  } = $props<{
    breakpoint?: string;
    verticalCount?: number;
    horizontalCount?: number;
  }>();

  $effect(() => {
    console.log(" verticalCount: ", verticalCount);
    console.log(" horizontalCount: ", horizontalCount);
  });

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
  /* :host {
    display: block;
    width: 100%;
    height: 100%;
  } */
</style>
