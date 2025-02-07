import { tick } from "svelte";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { expect, test, vi, describe, beforeEach, afterEach, beforeAll } from "vitest";
import "@testing-library/jest-dom/vitest";
import { getByShadowRole, queryByShadowRole } from "shadow-dom-testing-library";

import type { NotifierStatus, NotifierEventDetail } from "../types";
import notifier from "./notifier.test.svelte";

describe("Notifier Component", () => {
  let container: HTMLElement;

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
    // Avoid mocked error to display in console
    // vi.spyOn(console, "error").mockImplementation(() => {});
    const renderResult = render(notifier);
    container = renderResult.container;
    await tick();
  });

  const dispatchGlobalNotifyEvent = (detail: NotifierEventDetail) => {
    const event = new CustomEvent("pc-notify", { detail });
    document.dispatchEvent(event);
  };

  test("should render with default values", async () => {
    const dialog = getByShadowRole(container, "status", { hidden: true });

    expect(dialog).toBeInTheDocument();
    expect(dialog).not.toBeVisible();
  });

  test("should show notification when notify event is dispatched", async () => {
    dispatchGlobalNotifyEvent({
      message: "Test message",
      type: "success",
      duration: 1000,
    });

    // const dialog = getByShadowRole(container, "status", { hidden: true });
  });
});
