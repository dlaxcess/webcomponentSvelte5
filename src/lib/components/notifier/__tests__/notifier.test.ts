import { tick } from "svelte";
import { render, screen, getByRole } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { expect, test, vi, describe, beforeEach, beforeAll } from "vitest";
import "@testing-library/jest-dom/vitest";
import { getByShadowRole } from "shadow-dom-testing-library";

import type { NotifierEventDetail } from "../types";
import notifier from "./notifier.test.svelte";

describe("Notifier Component", () => {
  let container: HTMLElement;
  let dialog: HTMLDialogElement;

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
    await tick();
    dialog = getByShadowRole(container, "status", { hidden: true });
  });

  const dispatchGlobalNotifyEvent = async (detail: NotifierEventDetail) => {
    const event = new CustomEvent("notify", { detail });
    document.dispatchEvent(event);
  };

  test("should render with default values", async () => {
    expect(dialog).toBeInTheDocument();
    expect(dialog).not.toBeVisible();
    expect(dialog?.getAttribute("aria-live")).toBe("polite");
    expect(dialog?.open).toBe(false);
  });

  test("should show notification with success status by default", async () => {
    await dispatchGlobalNotifyEvent({
      message: "Test message",
      duration: 1000,
    });

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

    expect(dialog?.open).toBe(true);

    vi.advanceTimersByTime(1000);
    await tick();

    expect(dialog?.open).toBe(false);

    vi.useRealTimers();
  });

  test("should close on button click when closeable", async () => {
    await dispatchGlobalNotifyEvent({
      message: "Test message",
      duration: 0,
    });

    const closeButton = getByRole(dialog, "button") as HTMLButtonElement;

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

    const closeButton = getByRole(dialog, "button") as HTMLButtonElement;
    const user = userEvent.setup();

    // Should close on Escape
    // await user.keyboard("{Esc}");
    // await tick();

    // expect(dialog?.open).toBe(false);

    // // Show again
    // await dispatchGlobalNotifyEvent({
    //   message: "Test message",
    //   duration: 0,
    // });

    // Should close on Enter when button is focused
    closeButton.focus();
    await user.keyboard("{Enter}");
    await tick();
    expect(dialog?.open).toBe(false);

    // Show again
    await dispatchGlobalNotifyEvent({
      message: "Test message",
      duration: 0,
    });

    // Should close on Space when button is focused
    closeButton.focus();
    await user.keyboard(" ");
    await tick();
    expect(dialog?.open).toBe(false);
  });

  test("should embed notification in target element and replace in body when event dispatched from element", async () => {
    vi.useFakeTimers();

    const host = screen.getByTestId("notifier");

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

    expect(dialog?.open).toBe(true);
    expect(dialog?.classList.contains("embedded")).toBe(true);
    expect(targetElement.contains(host)).toBe(true);

    vi.advanceTimersByTime(1000);
    await tick();

    expect(dialog?.open).toBe(false);
    expect(document.body.contains(host)).toBe(true);

    // Cleanup
    document.body.removeChild(targetElement);

    vi.useRealTimers();
  });
});
