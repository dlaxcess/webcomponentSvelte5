import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// -----------------------------------------------------------------------------------------
// Mock native dialog behavior
// ( Not already supported by testing library : https://github.com/jsdom/jsdom/issues/3294 )
// -----------------------------------------------------------------------------------------

// Keep track of the active element before opening modal
let storedActiveElement: Element | null = null;

HTMLDialogElement.prototype.showModal = vi.fn(function mock(this: HTMLDialogElement) {
  // Store active element before showing modal
  storedActiveElement = document.activeElement;

  // Add Escape key event handler to mock closing the dialog
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && this.open) {
      this.close();
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  // Set up cleanup when dialog is closed
  this.addEventListener(
    "close",
    () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Restore focus to the element that was active before opening the modal
      if (storedActiveElement instanceof HTMLElement) {
        storedActiveElement.focus();
      }
    },
    { once: true }
  );

  this.open = true;
});

HTMLDialogElement.prototype.show = vi.fn(function mock(this: HTMLDialogElement) {
  this.open = true;
});

HTMLDialogElement.prototype.close = vi.fn(function mock(this: HTMLDialogElement) {
  this.dispatchEvent(new Event("close"));
  this.open = false;
});
