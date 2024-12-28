<svelte:options customElement="counter-display" />

<script lang="ts">
  import { counterStore } from './stores/counter';
  let counterExists = $state(false);
  let count = $state(0);

  // Synchroniser avec le store
  $effect(() => {
    counterStore.subscribe(value => {
      count = value;
    });
  });

  $effect(() => {
    const checkCounter = () => {
      const counter = document.querySelector('counter-component');
      counterExists = !!counter;
    };

    // Vérification initiale
    checkCounter();

    // Observer les changements du DOM pour détecter le counter
    const observer = new MutationObserver(checkCounter);
    observer.observe(document.body, { 
      childList: true,
      subtree: true 
    });

    return () => {
      observer.disconnect();
    };
  });
</script>

<div>
  {#if counterExists}
    <p>Valeur du compteur : {count}</p>
  {:else}
    <p>Pas de counter sur cette page</p>
  {/if}
</div>

<style>
  div {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 1rem 0;
  }
</style>
