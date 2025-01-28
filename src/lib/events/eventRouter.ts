// Types pour les événements spécifiques
interface ActionButtonEventDetail {
  type: "success" | "error";
  message: string;
}

type EventHandler = (event: CustomEvent) => void;

class EventRouter {
  private static instance: EventRouter;
  private eventHandlers: Map<string, EventHandler>;

  private constructor() {
    this.eventHandlers = new Map();
    this.registerHandlers();
  }

  public static getInstance(): EventRouter {
    if (!EventRouter.instance) {
      EventRouter.instance = new EventRouter();
    }
    return EventRouter.instance;
  }

  private registerHandlers() {
    // Handler pour actionButtonEmit
    const actionButtonHandler = (event: CustomEvent<ActionButtonEventDetail>) => {
      const { type, message } = event.detail;
      const duration = type === "error" ? 0 : 500;
      const sourceElement = event.target as HTMLElement;

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

      sourceElement.dispatchEvent(toastEvent);
    };

    this.addEventHandler("actionButtonEmit", actionButtonHandler);

    // Exemple: Handler pour un autre type d'événement
    // const otherHandler = (event: CustomEvent) => {
    //   // Logique spécifique pour cet événement
    // };
    // this.addEventHandler("otherEvent", otherHandler);
  }

  // Méthode publique pour ajouter dynamiquement des handlers
  public addEventHandler(eventType: string, handler: EventHandler) {
    this.eventHandlers.set(eventType, handler);
    document.addEventListener(eventType, handler as EventListener);
  }
}

export default EventRouter;
