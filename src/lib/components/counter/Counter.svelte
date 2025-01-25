<svelte:options customElement="counter-component" />

<script lang="ts">
  let { buttonHeader } = $props();
  let count: number = $state(0);

  const increment = () => {
    count += 1;
    emitCount();
  };

  const emitCount = () => {
    document.dispatchEvent(
      new CustomEvent("counter-update", {
        detail: { count },
        bubbles: true,
        composed: true,
      })
    );
  };

  // Émettre la valeur initiale une fois que le composant est monté
  $effect(() => {
    emitCount();
  });
</script>

<div>
  Title : <h2>{buttonHeader}</h2>
  <button onclick={increment}>
    count is {count}
  </button>
</div>

<style>
  :host {
    display: block;
    padding: 1rem;
    background-color: var(--counter-background, aqua);
    color: var(--counter-text-color, black);
  }
</style>
