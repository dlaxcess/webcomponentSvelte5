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

  let showMoreContainer: HTMLElement;
  let items = $state<HTMLElement[] | null>(null);
  let showMoreBtn = $state<HTMLButtonElement | null>(null);
  let showLessBtn = $state<HTMLButtonElement | null>(null);
  let list = $state<HTMLUListElement | null>(null);

  function getFocusableElement(item: HTMLElement): HTMLElement {
    // On cherche en priorité un bouton, sinon un lien
    return item.querySelector("button") || (item.querySelector("a") as HTMLElement);
  }

  function toggleVisibility(show: boolean) {
    if (!items) return;
    items.forEach((item, index) => {
      item.style.display = show || index < verticalCount ? "block" : "none";
    });

    if (showMoreBtn && showLessBtn) {
      showMoreBtn.style.display = show ? "none" : "block";
      showLessBtn.style.display = show ? "block" : "none";
    }

    // Mettre à jour le message pour les lecteurs d'écran
    if (list) {
      const newItemsCount = show ? items.length - verticalCount : 0;
      list.setAttribute("aria-label", show ? `${newItemsCount} éléments supplémentaires affichés` : "Liste réduite");
    }
  }

  function handleKeyDown(event: KeyboardEvent, show: boolean) {
    const target = event.target as HTMLElement;
    const isShowMoreLessBtn = target === showMoreBtn || target === showLessBtn;

    // Escape ferme toujours la liste quand elle est ouverte
    if (event.key === "Escape" && !show) {
      event.preventDefault();
      toggleVisibility(false);
      showMoreBtn?.focus();
      return;
    }

    // Enter et Space ne fonctionnent que sur les boutons show/less
    if (isShowMoreLessBtn && (event.key === "Enter" || event.key === " ")) {
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
  }

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

    // La liste est dans le contenu du slot
    list = itemsSlot.assignedElements()[0].querySelector("ul");
    items = Array.from(list?.querySelectorAll("li") || []);

    showMoreBtn = showMoreBtnSlot.assignedElements()[0] as HTMLButtonElement;
    showLessBtn = showLessBtnSlot.assignedElements()[0] as HTMLButtonElement;

    if (list) {
      list.setAttribute("aria-live", "polite");
      showMoreBtn.setAttribute("aria-controls", list.id);
      showLessBtn.setAttribute("aria-controls", list.id);
      // État initial des boutons
      showMoreBtn.ariaExpanded = "false";
      showLessBtn.ariaExpanded = "true";
    }

    showMoreContainer.addEventListener("keydown", (e) => handleKeyDown(e, false));
    showMoreBtn.addEventListener("click", () => toggleVisibility(true));
    showMoreBtn.addEventListener("keydown", (e) => handleKeyDown(e, true));
    showLessBtn.addEventListener("click", () => toggleVisibility(false));
    showLessBtn.addEventListener("keydown", (e) => handleKeyDown(e, false));

    toggleVisibility(false);

    return () => {
      showMoreContainer.removeEventListener("keydown", (e) => handleKeyDown(e, false));
      if (showMoreBtn && showLessBtn) {
        showMoreBtn.removeEventListener("click", () => toggleVisibility(true));
        showMoreBtn.removeEventListener("keydown", (e) => handleKeyDown(e, true));
        showLessBtn.removeEventListener("click", () => toggleVisibility(false));
        showLessBtn.removeEventListener("keydown", (e) => handleKeyDown(e, false));

        showMoreBtn.removeAttribute("aria-controls");
        showLessBtn.removeAttribute("aria-controls");

        showMoreBtn.removeAttribute("aria-expanded");
        showLessBtn.removeAttribute("aria-expanded");

        showMoreBtn.style.display = "none";
        showLessBtn.style.display = "none";
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
