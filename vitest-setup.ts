import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// -----------------------------------------------------------------------------------------
// Mock native dialog behavior
// ( Not already supported by testing library : https://github.com/jsdom/jsdom/issues/3294 )
// -----------------------------------------------------------------------------------------
HTMLDialogElement.prototype.showModal = vi.fn(function mock(this: HTMLDialogElement) {
  // Add Escape key event handler to mock closing the dialog
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && this.open) {
      this.close();
    }
  };
  document.addEventListener("keydown", handleKeyDown);
  this.addEventListener(
    "close",
    () => {
      document.removeEventListener("keydown", handleKeyDown);
    },
    { once: true }
  );
  this.open = true;
});

HTMLDialogElement.prototype.show = vi.fn(function mock(this: HTMLDialogElement) {
  this.open = true;
});

HTMLDialogElement.prototype.close = vi.fn(function mock(this: HTMLDialogElement) {
  this.open = false;
});
