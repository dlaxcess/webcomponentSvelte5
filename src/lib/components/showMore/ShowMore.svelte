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

  let { verticalCount = 2 } = $props<{
    verticalCount?: number;
  }>();

  let showMoreContainer: HTMLElement;
  let list = $state<HTMLUListElement | null>(null);
  let items = $state<HTMLElement[] | null>(null);
  let showMoreBtn = $state<HTMLButtonElement | null>(null);
  let showLessBtn = $state<HTMLButtonElement | null>(null);

  const toggleVisibility = (show: boolean) => {
    if (!items) return;
    items.forEach((item, index) => {
      item.style.display = show || index < verticalCount ? "block" : "none";
    });

    if (showMoreBtn && showLessBtn) {
      showMoreBtn.style.display = show ? "none" : "block";
      showLessBtn.style.display = show ? "block" : "none";
    }

    if (list) {
      const newItemsCount = show ? items.length - verticalCount : 0;
      list.setAttribute("aria-label", show ? `${newItemsCount} éléments supplémentaires affichés` : "Liste réduite");
    }
  };

  const handleKeyDown = (event: KeyboardEvent, show: boolean) => {
    if (event.key === "Escape" && !show) {
      event.preventDefault();
      toggleVisibility(false);
      showMoreBtn?.focus();
      return;
    }

    const target = event.target as HTMLElement;
    const isShowMoreLessButton = target === showMoreBtn || target === showLessBtn;

    if (isShowMoreLessButton && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();

      if (show) {
        toggleVisibility(true);
        const itemToFocus = items?.[verticalCount];
        if (itemToFocus) {
          getFocusableElement(itemToFocus).focus();
        }
      } else {
        toggleVisibility(false);
        showMoreBtn?.focus();
      }
    }
  };

  const getFocusableElement = (item: HTMLElement): HTMLElement => {
    return item.querySelector("button") || (item.querySelector("a") as HTMLElement);
  };

  onMount(() => {
    const itemsSlot = showMoreContainer?.querySelector('slot[name="items"]') as HTMLSlotElement;
    const showMoreBtnSlot = showMoreContainer?.querySelector('slot[name="show-more"]') as HTMLSlotElement;
    const showLessBtnSlot = showMoreContainer?.querySelector('slot[name="show-less"]') as HTMLSlotElement;

    if (
      !(itemsSlot instanceof HTMLSlotElement) ||
      !(showMoreBtnSlot instanceof HTMLSlotElement) ||
      !(showLessBtnSlot instanceof HTMLSlotElement)
    )
      return;

    list = itemsSlot.assignedElements()[0].querySelector("ul");
    items = Array.from(list?.querySelectorAll("li") || []);

    showMoreBtn = showMoreBtnSlot.assignedElements()[0] as HTMLButtonElement;
    showLessBtn = showLessBtnSlot.assignedElements()[0] as HTMLButtonElement;

    if (list) {
      list.setAttribute("aria-live", "polite");
      showMoreBtn.setAttribute("aria-controls", list.id);
      showLessBtn.setAttribute("aria-controls", list.id);
      showMoreBtn.ariaExpanded = "false";
      showLessBtn.ariaExpanded = "true";

      list.addEventListener("keydown", (e) => handleKeyDown(e, false));
    }

    showMoreBtn.addEventListener("click", () => toggleVisibility(true));
    showMoreBtn.addEventListener("keydown", (e) => handleKeyDown(e, true));
    showLessBtn.addEventListener("click", () => toggleVisibility(false));
    showLessBtn.addEventListener("keydown", (e) => handleKeyDown(e, false));

    toggleVisibility(false);

    return () => {
      list?.removeEventListener("keydown", (e) => handleKeyDown(e, false));
      list?.removeAttribute("aria-live");
      items?.forEach((item) => {
        item.style.display = "";
      });
      if (showMoreBtn && showLessBtn) {
        showMoreBtn.removeEventListener("click", () => toggleVisibility(true));
        showMoreBtn.removeEventListener("keydown", (e) => handleKeyDown(e, true));
        showLessBtn.removeEventListener("click", () => toggleVisibility(false));
        showLessBtn.removeEventListener("keydown", (e) => handleKeyDown(e, false));

        showMoreBtn.removeAttribute("aria-controls");
        showLessBtn.removeAttribute("aria-controls");

        showMoreBtn.removeAttribute("aria-expanded");
        showLessBtn.removeAttribute("aria-expanded");

        showMoreBtn.style.display = "";
        showLessBtn.style.display = "";
      }
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
