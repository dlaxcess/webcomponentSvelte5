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

  const showAll = () => {
    items?.forEach((item) => {
      item.style.display = "block";
    });
    if (!showMoreBtn || !showLessBtn) return;
    showMoreBtn.style.display = "none";
    showLessBtn.style.display = "block";
    isOpen = true;
  };

  const showVerticalCount = () => {
    items?.forEach((item, index) => {
      if (index >= verticalCount) item.style.display = "none";
    });
    if (!showMoreBtn || !showLessBtn) return;
    showMoreBtn.style.display = "block";
    showLessBtn.style.display = "none";
    isOpen = false;
  };

  const handleKeyDownOpen = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showAll();
      const itemToFocus = items?.[verticalCount];
      const link = itemToFocus?.querySelector("a");

      if (link) {
        link.focus();
      } else if (itemToFocus?.hasAttribute("tabindex")) {
        itemToFocus?.focus();
      }
    }
  };

  const handleKeyDownClose = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showVerticalCount();
      showMoreBtn?.focus();
    }
  };

  const handleEscClose = (event: KeyboardEvent) => {
    if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      showVerticalCount();
      showMoreBtn?.focus();
    }
  };

  onMount(() => {
    const ContentSlot = showMoreContainer?.querySelector('slot[name="items"]');
    const showMoreBtnSlot = showMoreContainer?.querySelector('slot[name="show-more"]');
    const showLessBtnSlot = showMoreContainer?.querySelector('slot[name="show-less"]');

    if (!(ContentSlot instanceof HTMLSlotElement)) return;
    if (!(showMoreBtnSlot instanceof HTMLSlotElement)) return;
    if (!(showLessBtnSlot instanceof HTMLSlotElement)) return;

    const content = ContentSlot.assignedElements()[0] as HTMLElement;
    items = Array.from(content.querySelectorAll(".item"));
    showMoreBtn = showMoreBtnSlot.assignedElements()[0] as HTMLButtonElement;
    showLessBtn = showLessBtnSlot.assignedElements()[0] as HTMLButtonElement;

    content.addEventListener("keydown", handleEscClose);
    showMoreBtn.addEventListener("click", showAll);
    showMoreBtn.addEventListener("keydown", handleKeyDownOpen);

    showLessBtn.addEventListener("click", showVerticalCount);
    showLessBtn.addEventListener("keydown", handleKeyDownClose);

    showVerticalCount();

    return () => {
      content.removeEventListener("keydown", handleEscClose);
      showMoreBtn?.removeEventListener("click", showAll);
      showMoreBtn?.removeEventListener("keydown", handleKeyDownOpen);

      showLessBtn?.removeEventListener("click", showVerticalCount);
      showLessBtn?.addEventListener("keydown", handleKeyDownClose);
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
