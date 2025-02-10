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
  });

  afterEach(() => {
    vi.restoreAllMocks();
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
    test("should route success events to source element", () => {
      // Create an action button
      const actionButton = document.createElement("button");
      document.body.appendChild(actionButton);

      // Get the handler from EventRouter
      const eventRouter = EventRouter.getInstance();
      const handler = eventRouter["eventHandlers"].get("actionButtonEmit");
      
      if (!handler) {
        throw new Error("actionButtonEmit handler not found in EventRouter");
      }

      // Simulate a success event
      const successEvent = new CustomEvent<ActionButtonEventDetail>("actionButtonEmit", {
        detail: {
          message: "Success message",
          type: "success"
        },
        bubbles: true
      });
      Object.defineProperty(successEvent, "target", { value: actionButton });

      // Spy on event dispatches
      const mockButtonDispatch = vi.spyOn(actionButton, "dispatchEvent");

      // Directly call the handler with the event
      handler(successEvent);

      // Check that notify event is sent by the button
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
      // Create an action button
      const actionButton = document.createElement("button");
      document.body.appendChild(actionButton);

      // Get the handler from EventRouter
      const eventRouter = EventRouter.getInstance();
      const handler = eventRouter["eventHandlers"].get("actionButtonEmit");
      
      if (!handler) {
        throw new Error("actionButtonEmit handler not found in EventRouter");
      }

      // Simulate an error event
      const errorEvent = new CustomEvent<ActionButtonEventDetail>("actionButtonEmit", {
        detail: {
          message: "Error message",
          type: "error"
        },
        bubbles: true
      });
      Object.defineProperty(errorEvent, "target", { value: actionButton });

      // Spy on event dispatches
      const mockDocumentDispatch = vi.spyOn(document, "dispatchEvent");

      // Directly call the handler with the event
      handler(errorEvent);

      // Check that notify event is sent by the document
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
  });
});
