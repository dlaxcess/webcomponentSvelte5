<svelte:options customElement="my-component" />

<script lang="ts">
  let { buttonHeader } = $props();
  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
  // export class Counter extends HTMLElement {}
</script>

<div>
  <h2>{buttonHeader}</h2>
  <button onclick={increment}>
    count is {count}
  </button>
</div>
