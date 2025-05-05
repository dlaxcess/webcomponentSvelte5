<svelte:options customElement="pc-dropdown" />

<script lang="ts">
  import { onMount } from "svelte";

  let isOpen = $state(false);
  let dropdownContainer: HTMLElement;

  let heading = $state<HTMLElement | null>(null);
  let trigger = $state<HTMLElement | null>(null);
  let content = $state<HTMLElement | null>(null);

  const open = () => {
    if (!trigger || !content) {
      return;
    }

    trigger.ariaExpanded = "true";
    content.hidden = false;
    isOpen = true;
  };

  const close = () => {
    if (!trigger || !content) {
      return;
    }

    trigger.ariaExpanded = "false";
    content.hidden = true;
    isOpen = false;
  };

  const toggleOpen = () => {
    isOpen ? close() : open();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Escape") {
      return;
    }

    if (!isOpen) {
      return;
    }

    close();
    trigger?.focus();
  };

  const initDropdown = () => {
    if (!heading || !content) {
      return;
    }

    const btn = document.createElement("button");
    btn.type = "button";
    btn.append(...heading.childNodes);
    heading.replaceChildren(btn);
    trigger = heading.querySelector("button");

    if (!trigger) {
      return;
    }

    content.id = crypto.randomUUID();
    trigger.id = `${content.id}-trigger`;
    trigger.setAttribute("aria-controls", content.id);
    content.setAttribute("aria-labelledby", trigger.id);
    content.setAttribute("role", "region");

    dropdownContainer.addEventListener("keydown", handleKeyDown);
    trigger.addEventListener("click", toggleOpen);
  };

  const disableDropdown = () => {
    if (!trigger || !content) {
      return;
    }

    trigger.removeAttribute("id");
    trigger.removeAttribute("aria-controls");
    trigger.removeAttribute("aria-expanded");
    content.removeAttribute("id");
    content.removeAttribute("aria-labelledby");
    content.removeAttribute("role");
    content.removeAttribute("hidden");

    dropdownContainer.removeEventListener("keydown", handleKeyDown);
    trigger.removeEventListener("click", toggleOpen);
    heading?.replaceChildren(...trigger.childNodes);
  };

  onMount(() => {
    const headingSlot = dropdownContainer.querySelector('slot[name="heading"]') as HTMLSlotElement;
    const contentSlot = dropdownContainer.querySelector('slot[name="content"]') as HTMLSlotElement;

    if (!headingSlot || !contentSlot) {
      return;
    }

    heading = headingSlot?.assignedElements()[0] as HTMLElement;
    content = contentSlot?.assignedElements()[0] as HTMLElement;

    if (!heading || !content) {
      return;
    }

    initDropdown();
    close();

    return () => {
      disableDropdown();
    };
  });
</script>

<div class="dropdown" bind:this={dropdownContainer} role="presentation">
  <slot name="heading"></slot>
  <slot name="content"></slot>
</div>
