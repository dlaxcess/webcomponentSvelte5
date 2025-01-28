<svelte:options customElement="notifier-component" />

<script lang="ts">
  import { fade, scale } from "svelte/transition";

  let notifierMessage = $state("");
  let notifierType = $state("success");
  let notifierDuration = $state(500);
  let closeable = $state("");
  let embeded = $state("");

  const resetNotifier = () => {
    document.body.prepend($host());
    notifierMessage = "";
    notifierType = "success";
    notifierDuration = 500;
    closeable = "";
    embeded = "";
  };

  $effect(() => {
    const handleNotifierUpdate = (event: CustomEvent) => {
      resetNotifier();

      if (event.target !== document) embeded = "embeded";

      if (event.target instanceof HTMLElement)
        event.target.shadowRoot ? event.target.shadowRoot.appendChild($host()) : event.target.appendChild($host());

      notifierMessage = event.detail.message;
      notifierType = event.detail.type ?? notifierType;
      notifierDuration = event.detail.duration ?? notifierDuration;

      if (notifierDuration > 0) {
        setTimeout(() => {
          resetNotifier();
        }, notifierDuration);
      } else {
        closeable = "closeable";
      }
    };
    //
    document.addEventListener("pc-toast-emit", handleNotifierUpdate as EventListener);

    // utile ?
    return () => {
      document.removeEventListener("pc-toast-emit", handleNotifierUpdate as EventListener);
    };
  });
</script>

{#if notifierMessage}
  <div
    class="notifier"
    class:embeded
    class:error={notifierType === "error"}
    in:scale
    out:fade={{ duration: 500 }}
    aria-live="polite"
  >
    {notifierMessage}

    <button onclick={resetNotifier} class:closeable>x</button>
  </div>
{/if}

<style>
  .notifier {
    position: fixed;
    top: var(--pc-header-spacing, 5rem);
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--pc-bg-color, #fff);
    padding: 2px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-wrap: nowrap;
    font-size: var(--pc-notifier-fsize, 1.2rem);
    z-index: 10000;
  }

  .embeded {
    position: absolute;
    top: unset;
    bottom: calc(100% + 6px);
  }

  .notifier:has(button.closeable) {
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

  .notifier.error {
    color: #f44336;
  }
</style>
