/**
 * Finds and returns the first focusable element within the provided HTML element.
 *
 * @param item - The HTML element to search within
 * @returns The first focusable element found, as an HTMLElement
 */
export const findFirstFocusableElement = (item: HTMLElement): HTMLElement | null => {
  const focusable = item.querySelector('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  return focusable as HTMLElement | null;
};
