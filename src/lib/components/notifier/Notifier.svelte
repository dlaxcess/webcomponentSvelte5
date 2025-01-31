<svelte:options customElement="notifier-component" />

<script lang="ts">
  import { clickOutside } from "$lib/functions/clickoutside";
  import type { NotifierStatus, NotifierEventDetail } from "./types";

  let notifierMessage = $state("");
  let notifierStatus = $state<NotifierStatus>("success");
  let notifierDuration = $state(400);
  let closeable = $state(false);
  let embeded = $state(false);
  let dialogRef = $state<HTMLDialogElement | null>(null);
  let previousActiveElement = $state<HTMLElement | null>(null);

  const resetNotifier = () => {
    document.body.prepend($host());
    notifierMessage = "";
    notifierStatus = "success";
    notifierDuration = 500;
    closeable = false;
    embeded = false;
  };

  const closeNotif = () => {
    if (dialogRef?.open) dialogRef.close();
    if (embeded && previousActiveElement instanceof HTMLElement) previousActiveElement.focus();
  };

  $effect(() => {
    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName === "display" && !dialogRef?.open) {
        resetNotifier();
      }
    };

    dialogRef?.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      dialogRef?.removeEventListener("transitionend", handleTransitionEnd);
    };
  });

  $effect(() => {
    const handleNotifierUpdate = (event: CustomEvent<NotifierEventDetail>) => {
      resetNotifier();

      if (event.target instanceof HTMLElement) {
        embeded = true;
        event.target.shadowRoot ? event.target.shadowRoot.appendChild($host()) : event.target.appendChild($host());
      }

      notifierMessage = event.detail.message;
      notifierStatus = event.detail.type ?? notifierStatus;
      notifierDuration = event.detail.duration ?? notifierDuration;

      if (notifierDuration > 0) {
        setTimeout(() => {
          closeNotif();
        }, notifierDuration);
      } else {
        closeable = true;
      }

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

<dialog
  bind:this={dialogRef}
  class:embeded
  class:error={notifierStatus === "error"}
  role={notifierStatus === "error" ? "alert" : "status"}
  aria-live={notifierStatus === "error" ? "assertive" : "polite"}
  use:clickOutside={closeNotif}
>
  <button type="button" onclick={closeNotif} class:closeable>
    {#if $$slots.closeButtonContent}
      <slot name="closeButtonContent" />
    {:else}
      X
    {/if}
  </button>

  <p>{notifierMessage}</p>
</dialog>

<style>
  /* For transition explaination see : 
  https://www.youtube.com/watch?v=vmDEHAzj2XE
  or
  https://frontendmasters.com/blog/animating-dialog/#closing-transition 
  */
  dialog {
    transition:
      display var(--notifier-transition-duration, 0.5s) allow-discrete,
      opacity var(--notifier-transition-duration, 0.5s) allow-discrete,
      overlay var(--notifier-transition-duration, 0.5s) allow-discrete,
      scale var(--notifier-transition-duration, 0.5s);

    opacity: 0;
    margin: 0 auto;
    top: var(--header-spacing, 5rem);
    background-color: var(--bg-color, #fff);
    border-radius: 4px;
    box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.2);
    border: none;
  }

  dialog[open] {
    opacity: 1;
  }

  @starting-style {
    dialog[open] {
      opacity: 0;
      scale: 0.5;
    }
  }

  dialog::backdrop {
    display: none;
  }

  *:focus-visible {
    outline: var(--focus-outline, revert);
  }

  .embeded {
    position: absolute;
    top: unset;
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    transform-origin: 0 50%;
    padding: 2px 4px;
    font-size: var(--notifier-fsize, 1.2rem);
    max-width: fit-content;
    text-wrap: nowrap;
    z-index: var(--zindex-notification, 10000);
  }

  p {
    margin: 0;
  }

  button {
    display: none;
  }

  button.closeable {
    display: block;
    float: right;
    margin-left: 1em;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  dialog.error {
    color: #f44336;
  }
</style>
