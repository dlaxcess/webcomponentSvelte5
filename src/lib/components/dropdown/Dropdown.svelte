<svelte:options customElement="pc-dropdown" />

<script lang="ts">
  let isOpen = $state(false);
  let dropdownContainer: HTMLElement;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleDropdown();
    } else if (event.key === "Escape" && isOpen) {
      isOpen = false;
    }
  }

  // Close dropdown when clicking outside
  function handleClickOutside(event: MouseEvent) {
    if (dropdownContainer && !dropdownContainer.contains(event.target as Node)) {
      isOpen = false;
    }
  }

  $effect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  $effect(() => {
    const slot = dropdownContainer?.querySelector('slot[name="items"]');
    if (slot instanceof HTMLSlotElement) {
      // Obtenir les éléments assignés au slot
      const assignedElements = slot.assignedElements();
      
      // Ajouter des event listeners à chaque élément
      assignedElements.forEach(element => {
        element.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          if (target.closest('.item')) {
            console.log('Dropdown item clicked:', target);
            isOpen = false; // Fermer le dropdown après un clic
          }
        });
      });
    }
  });
</script>

<div class="dropdown" bind:this={dropdownContainer}>
  <button
    type="button"
    class="dropdown-header"
    onclick={toggleDropdown}
    onkeydown={handleKeyDown}
    aria-expanded={isOpen}
    aria-haspopup="true"
  >
    <slot name="header"></slot>
    <span class="arrow" class:open={isOpen}>▼</span>
  </button>

  {#if isOpen}
    <div class="dropdown-content" role="listbox">
      <slot name="items"></slot>
    </div>
  {/if}
</div>

<style>
  .dropdown {
    position: relative;
    width: 100%;
  }

  .dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem 1rem;
    background: var(--dropdown-bg, #ffffff);
    border: 1px solid var(--dropdown-border, #e0e0e0);
    border-radius: 4px;
    cursor: pointer;
    font: inherit;
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  .dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--dropdown-content-bg, #ffffff);
    border: 1px solid var(--dropdown-border, #e0e0e0);
    border-top: none;
    border-radius: 0 0 4px 4px;
    z-index: 1000;
    max-height: 300px;
    overflow-y: auto;
  }

  /* Style pour les items (à appliquer via CSS sur les éléments slot) */
  :global(.dropdown-content ::slotted(.item)) {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  :global(.dropdown-content ::slotted(.item:hover)) {
    background-color: var(--dropdown-hover-bg, #f5f5f5);
  }
</style>
