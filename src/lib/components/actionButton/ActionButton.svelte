<svelte:options customElement="action-button" />

<script lang="ts">
  import { fade, scale } from "svelte/transition";

  let { action, entry, title = "", text = "" } = $props();

  let displayButton: boolean = $state(true);
  let toastMessage: string = $state("");
  let toastType: string = $state("success");

  const showToast = (message: string, type: "success" | "error" = "success", duration: number = 1000) => {
    toastMessage = message;
    toastType = type;
    setTimeout(() => {
      toastMessage = "";
    }, duration);
  };

  const copyToClipboard = async (entry: string) => {
    try {
      await navigator.clipboard.writeText(entry);
      showToast("Copié !");
    } catch (err) {
      console.error("Erreur lors de la copie : ", err);
      showToast("Échec de la copie", "error", 2000);
    }
  };

  const navigatorShare = async (title: string, text: string, entry: string) => {
    if (!navigator.share) {
      console.error("Web Share API non disponible");
      showToast("Partage non disponible sur ce navigateur", "error", 2000);
      return;
    }

    try {
      const shareData = {
        title,
        text,
        url: entry,
      };

      await navigator.share(shareData);
    } catch (err) {
      console.error("Erreur lors du partage :", err);
      showToast("Échec du partage", "error", 2000);
    }
  };

  const handleEvent = (event: Event | KeyboardEvent) => {
    console.log("handleEvent  event: ", event);
    if (event.type === "click" || ("key" in event && (event.key === "Enter" || event.key === " "))) {
      event.preventDefault();
      action === "share" ? navigatorShare(title, text, entry) : copyToClipboard(entry);
    }
  };

  $effect(() => {
    if (action === "share" && !navigator.share) displayButton = false;

    $host().style.setProperty("--button-display", !displayButton ? "none" : "block");
  });
</script>

{#if displayButton}
  <div role="presentation" tabindex="-1" onclick={handleEvent} onkeydown={handleEvent}>
    <slot name="button" />

    {#if toastMessage}
      <div class="toast" class:error={toastType === "error"} in:scale out:fade={{ duration: 600 }} aria-live="polite">
        {toastMessage}
      </div>
    {/if}
  </div>
{/if}

<style>
  :host {
    /* display: contents; */
    display: var(--button-display, block);
    width: fit-content;
    position: relative;
  }

  *:focus-visible {
    /* -webkit-focus-ring-color auto 1px; */
    outline: thin dotted;
  }

  .toast {
    position: absolute;
    top: -50px;
    right: -50px;
    background-color: white;
    padding: 8px 16px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .toast.error {
    color: #f44336;
  }

  /* :host {
        background-color: var(--counter-background, aqua);
        color: var(--counter-text-color, red);
    } */
</style>
