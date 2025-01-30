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
    this.registerHandlersAndInit();
  }

  public static getInstance(): EventRouter {
    if (!EventRouter.instance) {
      EventRouter.instance = new EventRouter();
      console.info("initialize EventRouter instance");
    }
    return EventRouter.instance;
  }

  private registerHandlersAndInit() {
    // Callback for actionButtonEmit customEvent
    const actionButtonHandler = (event: CustomEvent<ActionButtonEventDetail>) => {
      const { type, message } = event.detail;
      const duration = type === "error" ? 0 : 500;
      const sourceElement = event.target as HTMLElement;

      const notifyEvent = new CustomEvent("notify", {
        detail: {
          message,
          type,
          duration,
        },
        bubbles: true,
        composed: true,
      });

      type === "error" ? document.dispatchEvent(notifyEvent) : sourceElement.dispatchEvent(notifyEvent);
    };

    this.addEventHandler("actionButtonEmit", actionButtonHandler);
  }

  // Public method to dynamically add handlers
  public addEventHandler(eventType: string, handler: EventHandler) {
    this.eventHandlers.set(eventType, handler);
    document.addEventListener(eventType, handler as EventListener);
  }
}

export default EventRouter;
