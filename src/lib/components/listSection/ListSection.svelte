<svelte:options
  customElement={{
    tag: "pc-list-section",
    props: {
      breakpoint: { type: "String" },
      verticalCount: { type: "Number", attribute: "vertical-count" },
      horizontalCount: { type: "Number", attribute: "horizontal-count" },
    },
  }}
/>

<script lang="ts">
  import Slider from "../slider/Slider.svelte";
  import ShowMore from "../showMore/ShowMore.svelte";
  import { onMount } from "svelte";

  let {
    breakpoint = "480px",
    verticalCount = 2,
    horizontalCount = 2,
  } = $props<{
    breakpoint?: string;
    verticalCount?: number;
    horizontalCount?: number;
  }>();

  let activeBreakpoint = $state(breakpoint);
  let query = $state<MediaQueryList | null>(null);

  let Component = $state<any>(Slider);
  let componentProps = $derived(Component === Slider ? { horizontalCount } : { verticalCount });

  const updateComponent = (matchQuery: boolean) => {
    Component = matchQuery ? Slider : ShowMore;
  };

  onMount(() => {
    const cssBreakpointVarValue = getComputedStyle($host()).getPropertyValue("--_breakpoint").trim();
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
</style>
