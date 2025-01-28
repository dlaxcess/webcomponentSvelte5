<svelte:options customElement="action-button" />

<script lang="ts">
  let { action, entry, title = "", text = "" } = $props();
  let displayButton: boolean = $state(true);

  const actionButtonEmit = (message: string, type: "success" | "error" = "success") => {
    const event = new CustomEvent("actionButtonEmit", {
      detail: {
        type,
        message,
      },
      bubbles: true,
      composed: true,
    });

    $host().dispatchEvent(event);
  };

  const copyToClipboard = async (entry: string) => {
    try {
      await navigator.clipboard.writeText(entry);
      actionButtonEmit("URL copiée");
    } catch (err) {
      console.error("Erreur lors de la copie : ", err);
      actionButtonEmit("Échec de la copie", "error");
    }
  };

  const navigatorShare = async (title: string, text: string, url: string) => {
    if (!navigator.share) {
      console.error("Web Share API non disponible");
      actionButtonEmit("Partage non disponible sur ce navigateur", "error");
      return;
    }

    const shareData = {
      title,
      text,
      url,
    };

    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error("Erreur lors du partage :", err);
      actionButtonEmit("Échec du partage", "error");
    }
  };

  const handleEvent = (event: MouseEvent | KeyboardEvent) => {
    if (event.type === "click" || ("key" in event && (event.key === "Enter" || event.key === " "))) {
      event.preventDefault();
      action === "share" ? navigatorShare(title, text, entry) : copyToClipboard(entry);
    }
  };

  $effect(() => {
    // if (action === "share" && !navigator.share) displayButton = false;

    $host().style.setProperty("--button-display", !displayButton ? "none" : "block");
  });
</script>

{#if displayButton}
  <div role="presentation" tabindex="-1" onclick={handleEvent} onkeydown={handleEvent}>
    <slot name="button" />
  </div>
{/if}

<style>
  :host {
    display: var(--button-display, block);
    width: fit-content;
    position: relative;
  }
</style>
