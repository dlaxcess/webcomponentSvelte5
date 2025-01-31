import type { NotifierEventDetail } from "$lib/components/notifier/types";
import type { ActionButtonEventDetail } from "$lib/components/actionButton/types";

/** Type definition for event handler functions */
type EventHandler = (event: CustomEvent) => void;

/**
 * Singleton class that manages custom event routing in the application
 * Handles the registration and routing of events between components
 */
class EventRouter {
  private static instance: EventRouter;
  private eventHandlers: Map<string, EventHandler>;

  private constructor() {
    this.eventHandlers = new Map();
    this.registerHandlersAndInit();
  }

  /**
   * Gets the singleton instance of EventRouter
   * Creates a new instance if one doesn't exist
   * @returns The EventRouter instance
   */
  public static getInstance(): EventRouter {
    if (!EventRouter.instance) {
      EventRouter.instance = new EventRouter();
      console.info("initialize EventRouter instance");
    }
    return EventRouter.instance;
  }

  /**
   * Registers all event handlers during initialization
   * Currently handles:
   * - actionButtonEmit: Routes action button events to the appropriate notifier
   */
  private registerHandlersAndInit() {
    // Callback for actionButtonEmit customEvent
    const actionButtonHandler = (event: CustomEvent<ActionButtonEventDetail>) => {
      const { type, message } = event.detail;
      const duration = type === "error" ? 0 : 500;
      const sourceElement = event.target as HTMLElement;

      const notifyEvent = new CustomEvent<NotifierEventDetail>("notify", {
        detail: {
          message,
          type,
          duration,
        },
        bubbles: true,
        composed: true,
      });

      // For error notifications, dispatch to document to show globally
      // For success notifications, dispatch to source element for local display
      type === "error" ? document.dispatchEvent(notifyEvent) : sourceElement.dispatchEvent(notifyEvent);
    };

    this.addEventHandler("actionButtonEmit", actionButtonHandler);
  }

  /**
   * Adds a new event handler to the router
   * @param eventType The type of event to handle
   * @param handler The function to handle the event
   */
  public addEventHandler(eventType: string, handler: EventHandler) {
    this.eventHandlers.set(eventType, handler);
    document.addEventListener(eventType, handler as EventListener);
  }

  /**
   * Removes an event handler from the router
   * @param eventType The type of event whose handler should be removed
   */
  public removeEventHandler(eventType: string) {
    const handler = this.eventHandlers.get(eventType);
    if (handler) {
      document.removeEventListener(eventType, handler as EventListener);
      this.eventHandlers.delete(eventType);
    }
  }
}

export default EventRouter;
