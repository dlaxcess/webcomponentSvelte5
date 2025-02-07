import { tick } from "svelte";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { expect, test, vi, describe, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { getByShadowRole, queryByShadowRole } from "shadow-dom-testing-library";

import actionButtonCopy from "./actionButtonCopy.test.svelte";
import actionButtonShare from "./actionButtonShare.test.svelte";

describe("ActionButton Component", () => {
  // -----------------
  // Copy ActionButton
  // -----------------
  describe("Copy", () => {
    let copyButton: HTMLButtonElement;

    beforeEach(() => {
      // Avoid mocked error to display in console
      vi.spyOn(console, "error").mockImplementation(() => {});

      render(actionButtonCopy);

      copyButton = screen.getByRole("button", { name: "Copy" });
      expect(copyButton).toBeInTheDocument();
    });

    afterEach(() => {
      // Restore all mocked functions
      vi.restoreAllMocks();
    });

    test("should emit success event when copy succeeds", async () => {
      const onCustomEvent = vi.fn();
      document.addEventListener("actionButtonEmit", onCustomEvent);

      const user = userEvent.setup();
      await user.click(copyButton);

      expect(onCustomEvent).toHaveBeenCalledTimes(1);

      // First argument of first call
      const event = onCustomEvent.mock.calls[0][0];
      expect(event.detail).toEqual({ message: "URL copiée", type: "success" });

      expect(await navigator.clipboard.readText()).toBe("test text to copy");
    });

    test("should emit error event when copy fails", async () => {
      const onCustomEvent = vi.fn();
      document.addEventListener("actionButtonEmit", onCustomEvent);

      const clipboardMockError = vi
        .spyOn(navigator.clipboard, "writeText")
        .mockRejectedValue(new Error("Clipboard error"));

      const user = userEvent.setup();
      await user.click(copyButton);

      expect(onCustomEvent).toHaveBeenCalledTimes(1);

      expect(clipboardMockError).toHaveBeenCalledTimes(1);
      // First argument of first call
      const event = onCustomEvent.mock.calls[0][0];
      expect(event.detail).toEqual({ message: "Échec de la copie", type: "error" });
    });
  });

  // ------------------
  // Share ActionButton
  // ------------------
  describe("Share", () => {
    const originalShare = navigator.share;

    let shareButton: HTMLButtonElement | null;

    beforeEach(async () => {
      // Avoid mocked error to display in console
      vi.spyOn(console, "error").mockImplementation(() => {});
    });

    afterEach(() => {
      // Restore navigator.share inital value
      Object.defineProperty(navigator, "share", {
        value: originalShare,
        configurable: true,
        writable: true,
      });

      // Restore all mocked functions
      vi.restoreAllMocks();
    });

    const navigatorShareDefine = (defined: boolean) => {
      Object.defineProperty(navigator, "share", {
        value: defined ? vi.fn().mockResolvedValue(undefined) : undefined,
        configurable: true,
        writable: true,
      });
    };

    const setupComponent = async () => {
      render(actionButtonShare);
      await tick();
      const host = screen.getByTestId("action-button");
      expect(host).toBeInTheDocument();

      return host;
    };

    const setupShareDefinedComp = async () => {
      const host = await setupComponent();

      expect(host).toBeVisible();
      const computedStyle = window.getComputedStyle(host);
      expect(computedStyle.getPropertyValue("--action-button-display")).toBe("block");

      shareButton = getByShadowRole<HTMLButtonElement>(host.shadowRoot as unknown as HTMLElement, "button", {
        name: "Share",
      });
      expect(shareButton).toBeInTheDocument();
      expect(shareButton).toBeVisible();
      return shareButton;
    };

    test("should hide button when Navigator.share is undefined", async () => {
      navigatorShareDefine(false);

      const host = await setupComponent();

      shareButton = queryByShadowRole<HTMLButtonElement>(host.shadowRoot as unknown as HTMLElement, "button", {
        name: "Share",
      });

      const computedStyle = window.getComputedStyle(host);
      expect(computedStyle.getPropertyValue("--action-button-display")).toBe("none");

      expect(shareButton).not.toBeInTheDocument();
    });

    test("should emit error when button is clicked but Navigator.share is undefined", async () => {
      navigatorShareDefine(true);

      shareButton = await setupShareDefinedComp();

      navigatorShareDefine(false);

      const onCustomEvent = vi.fn();
      document.addEventListener("actionButtonEmit", onCustomEvent);
      const user = userEvent.setup();
      await user.click(shareButton);

      // Get first argument of first call
      const event = onCustomEvent.mock.calls[0][0];
      expect(event.detail).toEqual({ message: "Partage non disponible sur ce navigateur", type: "error" });
    });

    test("should emit error event when share fails", async () => {
      navigatorShareDefine(true);
      const navigatorShareMock = vi.spyOn(navigator, "share").mockRejectedValue(new Error("Share Erro"));

      shareButton = await setupShareDefinedComp();

      const onCustomEvent = vi.fn();
      document.addEventListener("actionButtonEmit", onCustomEvent);
      const user = userEvent.setup();
      await user.click(shareButton);

      expect(navigatorShareMock).toHaveBeenCalledTimes(1);
      expect(onCustomEvent).toHaveBeenCalledTimes(1);

      // Get first argument of first call
      const event = onCustomEvent.mock.calls[0][0];
      expect(event.detail).toEqual({ message: "Échec du partage", type: "error" });
    });

    test("should call Navigator.share with correct arguments when share succeeds", async () => {
      navigatorShareDefine(true);

      // Mock of navigator.share to simulate success
      const navigatorShareMock = vi.spyOn(navigator, "share").mockResolvedValue();

      shareButton = await setupShareDefinedComp();

      const user = userEvent.setup();
      await user.click(shareButton);

      // check navigator.share as been called with good arguments
      expect(navigatorShareMock).toHaveBeenCalledWith({
        url: "https://www.test.com",
        title: "Test title",
        text: "Test text",
      });
    });

    test("should trigger share when pressing Enter key", async () => {
      navigatorShareDefine(true);
      const navigatorShareMock = vi.spyOn(navigator, "share").mockResolvedValue();

      shareButton = await setupShareDefinedComp();

      const user = userEvent.setup();
      shareButton.focus();
      await user.keyboard("{Enter}");

      expect(navigatorShareMock).toHaveBeenCalledTimes(1);
    });

    test("should trigger share when pressing Space key", async () => {
      navigatorShareDefine(true);
      const navigatorShareMock = vi.spyOn(navigator, "share").mockResolvedValue();

      shareButton = await setupShareDefinedComp();

      const user = userEvent.setup();
      shareButton.focus();
      await user.keyboard(" ");

      expect(navigatorShareMock).toHaveBeenCalledTimes(1);
    });

    test("should not trigger share when pressing other keys", async () => {
      navigatorShareDefine(true);
      const navigatorShareMock = vi.spyOn(navigator, "share").mockResolvedValue();

      shareButton = await setupShareDefinedComp();

      const user = userEvent.setup();
      shareButton.focus();
      await user.keyboard("A");

      expect(navigatorShareMock).not.toHaveBeenCalled();
    });
  });
});
