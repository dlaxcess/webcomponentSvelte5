<svelte:options customElement="pc-dropdown" />

<script lang="ts">
  import { onMount } from "svelte";

  let isOpen = $state(false);
  let dropdownContainer: HTMLElement;
  let trigger = $state<HTMLElement | null>(null);
  let content = $state<HTMLElement | null>(null);

  const open = () => {
    if (!content) return;
    content.style.display = "";
    isOpen = true;
    if (trigger) trigger.ariaExpanded = "true";
  };

  const close = () => {
    if (!content) return;
    content.style.display = "none";
    isOpen = false;
    if (trigger) trigger.ariaExpanded = "false";
  };

  const toggleOpen = () => {
    isOpen ? close() : open();
  };

  onMount(() => {
    const triggerSlot = dropdownContainer.querySelector('slot[name="dropdown-trigger"]') as HTMLSlotElement;
    const contentSlot = dropdownContainer.querySelector('slot[name="dropdown-content"]') as HTMLSlotElement;

    if (!triggerSlot || !contentSlot) return;

    trigger = triggerSlot?.assignedElements()[0] as HTMLElement;
    content = contentSlot?.assignedElements()[0] as HTMLElement;

    if (!trigger || !content) return;

    content.style.position = "absolute";
    trigger.ariaExpanded = "false";

    close();
    trigger.addEventListener("click", toggleOpen);

    return () => {
      trigger?.removeEventListener("click", toggleOpen);
    };
  });
</script>

<div bind:this={dropdownContainer}>
  <slot name="dropdown-trigger"></slot>
  <slot name="dropdown-content"></slot>
</div>

<style>
  div {
    position: relative;
  }
</style>
