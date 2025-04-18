<svelte:options
  customElement={{
    tag: "pc-show-more",
    props: {
      verticalCount: { type: "Number", attribute: "vertical-count" },
    },
  }}
/>

<script lang="ts">
  import { onMount } from "svelte";

  let { verticalCount = 3 } = $props<{
    verticalCount?: number;
  }>();

  let isOpen = $state(false);
  let showMoreContainer: HTMLElement;
  let items = $state<HTMLElement[] | null>(null);
  let showMoreBtn = $state<HTMLButtonElement | null>(null);
  let showLessBtn = $state<HTMLButtonElement | null>(null);

  function toggleVisibility(show: boolean) {
    if (!items) return;
    items.forEach((item, index) => {
      item.style.display = show || index < verticalCount ? "block" : "none";
    });
    
    if (showMoreBtn && showLessBtn) {
      showMoreBtn.style.display = show ? "none" : "block";
      showLessBtn.style.display = show ? "block" : "none";
    }
    isOpen = show;
  }

  function handleKeyDown(event: KeyboardEvent, show: boolean) {
    if (event.key === "Enter" || event.key === " " || (event.key === "Escape" && !show)) {
      event.preventDefault();
      
      if (show) {
        toggleVisibility(true);
        const itemToFocus = items?.[verticalCount];
        const link = itemToFocus?.querySelector("a");
        if (link) link.focus();
        else if (itemToFocus?.hasAttribute("tabindex")) itemToFocus.focus();
      } else {
        toggleVisibility(false);
        showMoreBtn?.focus();
      }
    }
  }

  onMount(() => {
    const ContentSlot = showMoreContainer?.querySelector('slot[name="items"]');
    const showMoreBtnSlot = showMoreContainer?.querySelector('slot[name="show-more"]');
    const showLessBtnSlot = showMoreContainer?.querySelector('slot[name="show-less"]');

    if (!(ContentSlot instanceof HTMLSlotElement) || 
        !(showMoreBtnSlot instanceof HTMLSlotElement) || 
        !(showLessBtnSlot instanceof HTMLSlotElement)) return;

    const content = ContentSlot.assignedElements()[0] as HTMLElement;
    items = Array.from(content.querySelectorAll(".item"));
    showMoreBtn = showMoreBtnSlot.assignedElements()[0] as HTMLButtonElement;
    showLessBtn = showLessBtnSlot.assignedElements()[0] as HTMLButtonElement;

    content.addEventListener("keydown", (e) => handleKeyDown(e, false));
    showMoreBtn.addEventListener("click", () => toggleVisibility(true));
    showMoreBtn.addEventListener("keydown", (e) => handleKeyDown(e, true));
    showLessBtn.addEventListener("click", () => toggleVisibility(false));
    showLessBtn.addEventListener("keydown", (e) => handleKeyDown(e, false));

    toggleVisibility(false);

    return () => {
      content.removeEventListener("keydown", (e) => handleKeyDown(e, false));
      showMoreBtn?.removeEventListener("click", () => toggleVisibility(true));
      showMoreBtn?.removeEventListener("keydown", (e) => handleKeyDown(e, true));
      showLessBtn?.removeEventListener("click", () => toggleVisibility(false));
      showLessBtn?.removeEventListener("keydown", (e) => handleKeyDown(e, false));
    };
  });
</script>

<div bind:this={showMoreContainer} role="presentation">
  <slot name="header"></slot>
  <slot name="items"></slot>
  <slot name="show-more"></slot>
  <slot name="show-less"></slot>
</div>

<style>
</style>
