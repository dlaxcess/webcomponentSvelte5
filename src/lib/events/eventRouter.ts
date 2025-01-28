interface ActionButtonEventDetail {
  type: "success" | "error";
  message: string;
}

class EventRouter {
  private static instance: EventRouter;

  private constructor() {
    this.initializeListeners();
  }

  public static getInstance(): EventRouter {
    if (!EventRouter.instance) {
      EventRouter.instance = new EventRouter();
    }
    return EventRouter.instance;
  }

  private initializeListeners() {
    document.addEventListener("actionButtonEmit", this.handleActionButtonEvent as EventListener);
  }

  private handleActionButtonEvent = (event: CustomEvent<ActionButtonEventDetail>) => {
    const { type, message } = event.detail;

    // Définir la durée en fonction du type
    const duration = type === "error" ? 0 : 500;

    // Récupérer l'élément source
    const sourceElement = event.target as HTMLElement;

    // Émettre l'événement showToast
    const toastEvent = new CustomEvent("showToast", {
      detail: {
        message,
        type,
        duration,
        sourceElement
      },
      bubbles: true,
      composed: true,
    });

    // Émettre depuis la source de l'événement original
    sourceElement.dispatchEvent(toastEvent);
  };
}

// Initialiser le routeur au chargement du module
EventRouter.getInstance();

export default EventRouter;
