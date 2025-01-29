<svelte:options customElement="notifier-component" />

<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { clickOutside } from "$lib/functions/clickoutside";

  let notifierMessage = $state("");
  let notifierType = $state("success");
  let notifierDuration = $state(500);
  let closeable = $state("");
  let embeded = $state("");
  let isOpening = $state(false);
  let dialogRef = $state<HTMLDialogElement | null>(null);
  let previousActiveElement = $state<HTMLElement | null>(null);

  const resetNotifier = () => {
    document.body.prepend($host());
    notifierMessage = "";
    notifierType = "success";
    notifierDuration = 500;
    closeable = "";
    embeded = "";
    isOpening = false;
    dialogRef?.close();
    // Restaurer le focus à l'élément précédent
    if (previousActiveElement instanceof HTMLElement) {
      previousActiveElement.focus();
    }
  };

  $effect(() => {
    const handleNotifierUpdate = (event: CustomEvent) => {
      resetNotifier();

      isOpening = true;

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

      // Ouvrir le dialogue après avoir déterminé si c'est closeable
      if (dialogRef) {
        previousActiveElement = document.activeElement as HTMLElement;
        closeable ? dialogRef.showModal() : dialogRef.show();
      }
    };

    document.addEventListener("notify", handleNotifierUpdate as EventListener);

    return () => {
      document.removeEventListener("notify", handleNotifierUpdate as EventListener);
    };
  });
</script>

{#if notifierMessage}
  <dialog
    bind:this={dialogRef}
    class="notifier"
    class:embeded
    class:error={notifierType === "error"}
    in:scale
    out:fade={{ duration: 500 }}
    role={notifierType === "error" ? "alert" : "status"}
    aria-live={notifierType === "error" ? "assertive" : "polite"}
    use:clickOutside={{ callback: resetNotifier, isOpening }}
  >
    {notifierMessage}

    <button onclick={resetNotifier} class:closeable>x</button>
  </dialog>
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
