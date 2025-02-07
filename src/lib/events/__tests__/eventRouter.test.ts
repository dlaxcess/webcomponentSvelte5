import { expect, test, vi, describe, beforeEach, afterEach } from "vitest";
import EventRouter from "../eventRouter";
import type { ActionButtonEventDetail } from "$lib/components/actionButton/types";

describe("EventRouter", () => {
  let eventRouter: EventRouter;

  beforeEach(() => {
    // Reset the singleton instance before each test
    // @ts-expect-error accessing private property for testing
    EventRouter["instance"] = undefined;
    eventRouter = EventRouter.getInstance();

    // Configure fake timers
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  test("should create only one instance (Singleton)", () => {
    const instance1 = EventRouter.getInstance();
    const instance2 = EventRouter.getInstance();
    expect(instance1).toBe(instance2);
  });

  test("should add and remove event handlers", () => {
    const mockHandler = vi.fn();
    const eventType = "testEvent";

    // Test adding handler
    eventRouter.addEventHandler(eventType, mockHandler);
    document.dispatchEvent(new CustomEvent(eventType));
    expect(mockHandler).toHaveBeenCalledTimes(1);

    // Test removing handler
    eventRouter.removeEventHandler(eventType);
    document.dispatchEvent(new CustomEvent(eventType));
    expect(mockHandler).toHaveBeenCalledTimes(1); // Should not increase
  });

  describe("actionButtonEmit handler", () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    test("should route success events to source element", () => {
      // Créer un bouton d'action
      const actionButton = document.createElement("button");
      document.body.appendChild(actionButton);

      // Récupérer le handler de l'EventRouter
      const eventRouter = EventRouter.getInstance();
      const handler = eventRouter["eventHandlers"].get("actionButtonEmit");
      
      if (!handler) {
        throw new Error("actionButtonEmit handler not found in EventRouter");
      }

      // Simuler un événement de succès
      const successEvent = new CustomEvent<ActionButtonEventDetail>("actionButtonEmit", {
        detail: {
          message: "Success message",
          type: "success"
        },
        bubbles: true
      });
      Object.defineProperty(successEvent, "target", { value: actionButton });

      // Spy sur les dispatch d'événements
      const mockButtonDispatch = vi.spyOn(actionButton, "dispatchEvent");

      // Appeler directement le handler avec l'événement
      handler(successEvent);

      // Vérifier que l'événement notify est envoyé au bouton
      const notifyEvents = mockButtonDispatch.mock.calls
        .map(call => call[0] as CustomEvent)
        .filter(event => event.type === "notify");

      expect(notifyEvents.length).toBe(1);
      expect(notifyEvents[0].detail).toEqual({
        message: "Success message",
        type: "success",
        duration: 500
      });

      document.body.removeChild(actionButton);
    });

    test("should route error events to document", () => {
      // Créer un bouton d'action
      const actionButton = document.createElement("button");
      document.body.appendChild(actionButton);

      // Récupérer le handler de l'EventRouter
      const eventRouter = EventRouter.getInstance();
      const handler = eventRouter["eventHandlers"].get("actionButtonEmit");
      
      if (!handler) {
        throw new Error("actionButtonEmit handler not found in EventRouter");
      }

      // Simuler un événement d'erreur
      const errorEvent = new CustomEvent<ActionButtonEventDetail>("actionButtonEmit", {
        detail: {
          message: "Error message",
          type: "error"
        },
        bubbles: true
      });
      Object.defineProperty(errorEvent, "target", { value: actionButton });

      // Spy sur les dispatch d'événements
      const mockDocumentDispatch = vi.spyOn(document, "dispatchEvent");

      // Appeler directement le handler avec l'événement
      handler(errorEvent);

      // Vérifier que l'événement notify est envoyé au document
      const notifyEvents = mockDocumentDispatch.mock.calls
        .map(call => call[0] as CustomEvent)
        .filter(event => event.type === "notify");

      expect(notifyEvents.length).toBe(1);
      expect(notifyEvents[0].detail).toEqual({
        message: "Error message",
        type: "error",
        duration: 0
      });

      document.body.removeChild(actionButton);
    });

    test("should set correct duration based on event type", () => {
      // Créer un bouton d'action
      const actionButton = document.createElement("button");
      document.body.appendChild(actionButton);

      // Récupérer le handler de l'EventRouter
      const eventRouter = EventRouter.getInstance();
      const handler = eventRouter["eventHandlers"].get("actionButtonEmit");
      
      if (!handler) {
        throw new Error("actionButtonEmit handler not found in EventRouter");
      }

      // Simuler un événement de succès
      const successEvent = new CustomEvent<ActionButtonEventDetail>("actionButtonEmit", {
        detail: {
          message: "Success",
          type: "success"
        },
        bubbles: true
      });
      Object.defineProperty(successEvent, "target", { value: actionButton });

      // Simuler un événement d'erreur
      const errorEvent = new CustomEvent<ActionButtonEventDetail>("actionButtonEmit", {
        detail: {
          message: "Error",
          type: "error"
        },
        bubbles: true
      });
      Object.defineProperty(errorEvent, "target", { value: actionButton });

      // Spy sur les dispatch d'événements
      const mockButtonDispatch = vi.spyOn(actionButton, "dispatchEvent");
      const mockDocumentDispatch = vi.spyOn(document, "dispatchEvent");

      // Appeler directement les handlers avec les événements
      handler(successEvent);
      handler(errorEvent);

      // Vérifier les événements notify
      const documentNotifyEvents = mockDocumentDispatch.mock.calls
        .map(call => call[0] as CustomEvent)
        .filter(event => event.type === "notify");

      const buttonNotifyEvents = mockButtonDispatch.mock.calls
        .map(call => call[0] as CustomEvent)
        .filter(event => event.type === "notify");

      // Un seul événement d'erreur sur le document
      expect(documentNotifyEvents.length).toBe(1);
      expect(documentNotifyEvents[0].detail.duration).toBe(0);

      // Un seul événement de succès sur le bouton
      expect(buttonNotifyEvents.length).toBe(1);
      expect(buttonNotifyEvents[0].detail.duration).toBe(500);

      document.body.removeChild(actionButton);
    });
  });
});
