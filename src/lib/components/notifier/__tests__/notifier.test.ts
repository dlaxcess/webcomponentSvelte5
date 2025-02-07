import { tick } from "svelte";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { expect, test, vi, describe, beforeEach, afterEach, beforeAll } from "vitest";
import "@testing-library/jest-dom/vitest";

import type { NotifierStatus, NotifierEventDetail } from "../types";
import notifier from "./notifier.test.svelte";

describe("Notifier Component", () => {
  let container: HTMLElement;
  let host: HTMLElement;

  beforeAll(() => {
    HTMLDialogElement.prototype.show = vi.fn(function mock(this: HTMLDialogElement) {
      this.open = true;
    });

    HTMLDialogElement.prototype.showModal = vi.fn(function mock(this: HTMLDialogElement) {
      this.open = true;
    });

    HTMLDialogElement.prototype.close = vi.fn(function mock(this: HTMLDialogElement) {
      this.open = false;
    });
  });

  beforeEach(async () => {
    const renderResult = render(notifier);
    container = renderResult.container;
    host = container.querySelector("notifier-component") as HTMLElement;
    await tick();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const dispatchGlobalNotifyEvent = async (detail: NotifierEventDetail) => {
    const event = new CustomEvent("notify", { detail });
    document.dispatchEvent(event);
    await tick();
  };

  test("should render with default values", async () => {
    const dialog = host.shadowRoot?.querySelector("dialog");

    expect(dialog).toBeInTheDocument();
    expect(dialog?.getAttribute("role")).toBe("status");
    expect(dialog?.getAttribute("aria-live")).toBe("polite");
    expect(dialog?.open).toBe(false);
  });

  test("should show notification with success status by default", async () => {
    await dispatchGlobalNotifyEvent({
      message: "Test message",
      duration: 1000,
    });

    const dialog = host.shadowRoot?.querySelector("dialog");
    expect(dialog?.open).toBe(true);
    expect(dialog?.textContent).toContain("Test message");
    expect(dialog?.classList.contains("error")).toBe(false);
  });

  test("should show notification with error status and correct ARIA attributes", async () => {
    await dispatchGlobalNotifyEvent({
      message: "Error message",
      type: "error",
      duration: 1000,
    });

    const dialog = host.shadowRoot?.querySelector("dialog");
    expect(dialog?.open).toBe(true);
    expect(dialog?.textContent).toContain("Error message");
    expect(dialog?.classList.contains("error")).toBe(true);
    expect(dialog?.getAttribute("role")).toBe("alert");
    expect(dialog?.getAttribute("aria-live")).toBe("assertive");
  });

  test("should auto-close notification after specified duration", async () => {
    vi.useFakeTimers();

    await dispatchGlobalNotifyEvent({
      message: "Test message",
      duration: 1000,
    });

    const dialog = host.shadowRoot?.querySelector("dialog");
    expect(dialog?.open).toBe(true);

    await vi.advanceTimersByTime(1000);
    await tick();
    
    expect(dialog?.open).toBe(false);

    vi.useRealTimers();
  });

  test("should show close button and stay open when duration is 0", async () => {
    await dispatchGlobalNotifyEvent({
      message: "Test message",
      duration: 0,
    });

    const dialog = host.shadowRoot?.querySelector("dialog");
    const closeButton = dialog?.querySelector("button");

    expect(dialog?.open).toBe(true);
    expect(closeButton).toBeInTheDocument();
    expect(closeButton?.classList.contains("closeable")).toBe(true);
  });

  test("should close on button click when closeable", async () => {
    await dispatchGlobalNotifyEvent({
      message: "Test message",
      duration: 0,
    });

    const dialog = host.shadowRoot?.querySelector("dialog");
    const closeButton = dialog?.querySelector("button") as HTMLButtonElement;
    
    const user = userEvent.setup();
    await user.click(closeButton);
    await tick();

    expect(dialog?.open).toBe(false);
  });

  test("should handle keyboard interactions correctly", async () => {
    await dispatchGlobalNotifyEvent({
      message: "Test message",
      duration: 0,
    });

    const dialog = host.shadowRoot?.querySelector("dialog");
    const closeButton = dialog?.querySelector("button") as HTMLButtonElement;
    const user = userEvent.setup();

    // Should close on Escape
    await user.keyboard("{Escape}");
    await tick();
    expect(dialog?.open).toBe(false);

    // Show again
    await dispatchGlobalNotifyEvent({
      message: "Test message",
      duration: 0,
    });

    // Should close on Enter when button is focused
    closeButton.focus();
    await user.keyboard("{Enter}");
    await tick();
    expect(dialog?.open).toBe(false);
  });

  test("should embed notification in target element when event is dispatched from element", async () => {
    // Create a test element
    const targetElement = document.createElement("div");
    document.body.appendChild(targetElement);

    const event = new CustomEvent("notify", {
      detail: {
        message: "Embedded message",
        duration: 1000,
      },
      bubbles: true,
    });
    targetElement.dispatchEvent(event);
    await tick();

    const dialog = host.shadowRoot?.querySelector("dialog");
    expect(dialog?.open).toBe(true);
    expect(dialog?.classList.contains("embedded")).toBe(true);
    expect(targetElement.contains(host)).toBe(true);

    // Cleanup
    document.body.removeChild(targetElement);
  });
});
