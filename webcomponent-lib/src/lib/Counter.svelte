<svelte:options customElement="counter-component" />

<script lang="ts">
  import { counterStore } from './stores/counter';
  let { buttonHeader } = $props();
  
  // Utiliser $state pour la réactivité
  let count = $state(0);

  // Synchroniser avec le store
  $effect(() => {
    counterStore.subscribe(value => {
      count = value;
    });
  });

  const increment = () => {
    count += 1;
    counterStore.set(count);
  };
</script>

<div>
  <h2>{buttonHeader}</h2>
  <button onclick={increment}>
    count is {count}
  </button>
</div>
