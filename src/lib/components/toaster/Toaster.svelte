<svelte:options customElement="toaster-component" />

<script lang="ts">
  import { fade, scale } from "svelte/transition";

  let toastMessage = $state("");
  let toastType = $state("success");
  let toastDuration = $state(500);
  let closeable = $state("");
  let embeded = $state("");

  const resetTaost = () => {
    document.body.prepend($host());
    toastMessage = "";
    toastType = "success";
    toastDuration = 500;
  };

  $effect(() => {
    const handleToastUpdate = (event: CustomEvent) => {
      closeable = "";
      embeded = "";

      if (event.target !== document) embeded = "embeded";

      if (event.target instanceof HTMLElement)
        event.target.shadowRoot ? event.target.shadowRoot.appendChild($host()) : event.target.appendChild($host());

      toastMessage = event.detail.message;
      toastType = event.detail.type ?? toastType;
      toastDuration = event.detail.duration ?? toastDuration;

      if (toastDuration) {
        setTimeout(() => {
          resetTaost();
        }, toastDuration);
      } else {
        closeable = "closeable";
      }
    };

    document.addEventListener("showToast", handleToastUpdate as EventListener);

    // utile ?
    return () => {
      document.removeEventListener("showToast", handleToastUpdate as EventListener);
    };
  });
</script>

{#if toastMessage}
  <div
    class="toast"
    class:embeded
    class:error={toastType === "error"}
    in:scale
    out:fade={{ duration: 500 }}
    aria-live="polite"
  >
    {toastMessage}

    <button onclick={resetTaost} class:closeable>x</button>
  </div>
{/if}

<style>
  .toast {
    position: fixed;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--pc-bg-color, #fff);
    padding: 2px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-wrap: nowrap;
    font-size: var(--pc-toast-fsize, 1.2rem);
    z-index: 10000;
  }

  .embeded {
    position: absolute;
    top: unset;
    bottom: calc(100% + 6px);
  }

  .toast:has(button.closeable) {
    padding: 1.5em;
  }

  button {
    display: none;
  }

  button.closeable {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 4px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .toast.error {
    color: #f44336;
  }
</style>
