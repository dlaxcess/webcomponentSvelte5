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
  };

  const close = () => {
    if (!content) return;
    content.style.display = "none";
    isOpen = false;
  };

  const toggleOpen = () => {
    isOpen ? close() : open();
  };

  const initDropdown = () => {
    if (!trigger) return;
    trigger.ariaExpanded = "false";
  };

  onMount(() => {
    const triggerSlot = dropdownContainer.querySelector('slot[name="dropdown-trigger"]') as HTMLSlotElement;
    const contentSlot = dropdownContainer.querySelector('slot[name="dropdown-content"]') as HTMLSlotElement;

    if (!triggerSlot || !contentSlot) return;

    trigger = triggerSlot?.assignedElements()[0] as HTMLElement;
    content = contentSlot?.assignedElements()[0] as HTMLElement;

    if (!trigger || !content) return;

    const button = dropdownContainer.querySelector("button");
    console.log(" onMount button: ", button);

    close();
    initDropdown();
    if (button) button.addEventListener("click", toggleOpen);

    return () => {};
  });
</script>

<div class="dropdown" bind:this={dropdownContainer} role="presentation">
  <button>
    <slot name="dropdown-trigger"></slot>
  </button>
  <slot name="dropdown-content"></slot>
</div>

<style>
</style>
