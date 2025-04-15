<svelte:options customElement="pc-responsive-container" />

<script lang="ts">
  import type { CarouselProps } from '../carousel/types';
  import type { DropdownProps } from '../dropdown/types';
  import Carousel from '../carousel/Carousel.svelte';
  import Dropdown from '../dropdown/Dropdown.svelte';

  let { breakpoint = 768 } = $props<{ breakpoint?: number }>();

  const carousel = new Carousel({
    target: document.createElement('div'),
    props: {}
  });

  const dropdown = new Dropdown({
    target: document.createElement('div'),
    props: {}
  });

  let activeComponent = $state<typeof carousel | typeof dropdown>(carousel);

  function updateLayout() {
    activeComponent = window.innerWidth > breakpoint ? carousel : dropdown;
  }

  $effect(() => {
    // Initial layout update
    updateLayout();

    // Add resize listener
    window.addEventListener('resize', updateLayout);
    return () => {
      window.removeEventListener('resize', updateLayout);
      carousel.$destroy();
      dropdown.$destroy();
    };
  });

  $effect(() => {
    // Forward slots to active component
    const titleSlot = activeComponent.$root?.querySelector('slot[name="title"]');
    const itemsSlot = activeComponent.$root?.querySelector('slot[name="items"]');
    
    if (titleSlot && itemsSlot) {
      const ourTitleSlot = $host().querySelector('slot[name="title"]');
      const ourItemsSlot = $host().querySelector('slot[name="items"]');

      if (ourTitleSlot && ourItemsSlot) {
        titleSlot.assignedNodes().forEach((node: Node) => {
          ourTitleSlot.appendChild(node.cloneNode(true));
        });
        itemsSlot.assignedNodes().forEach((node: Node) => {
          ourItemsSlot.appendChild(node.cloneNode(true));
        });
      }
    }
  });
</script>

{#if activeComponent}
  {activeComponent.$root?.innerHTML || ''}
{/if}

<style>
  :host {
    display: block;
    width: 100%;
  }
</style>
