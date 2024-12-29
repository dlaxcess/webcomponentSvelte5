<svelte:options customElement="counter-display" />

<script lang="ts">
  let counterValue: number = $state(0);
  let counterExists = $state(false);

  $effect(() => {
    const checkCounter = () => {
      const counter = document.querySelector('counter-component');
      counterExists = !!counter;
    };

    // Vérification initiale
    checkCounter();

    // Écouter les mises à jour du counter
    const handleCounterUpdate = (event: CustomEvent) => {
      counterValue = event.detail.count;
    };

    // Observer les changements du DOM pour détecter le counter
    const observer = new MutationObserver(checkCounter);
    observer.observe(document.body, { 
      childList: true,
      subtree: true 
    });

    document.addEventListener('counter-update', handleCounterUpdate as EventListener);

    return () => {
      observer.disconnect();
      document.removeEventListener('counter-update', handleCounterUpdate as EventListener);
    };
  });
</script>

<div>
  {#if counterExists}
    <p>Valeur du compteur : {counterValue}</p>
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
