/**
 * Svelte action to handle clicks outside of an element
 * @param node The element to which the action is applied
 * @param options Options for the clickOutside action
 * @returns An action object with a destroy method to clean up event listeners
 */
interface ClickOutsideOptions {
  callback: () => void;
  openedByClick?: boolean;
}

export function clickOutside(node: HTMLElement, options: ClickOutsideOptions) {
  let openedByClick = options.openedByClick;

  const onClick = (event: MouseEvent) => {
    if (openedByClick) {
      openedByClick = false;
      return;
    }

    const target = event.target as Node;
    if (!node.contains(target)) {
      options.callback();
    }
  };

  document.addEventListener("click", onClick);

  return {
    destroy() {
      document.removeEventListener("click", onClick);
    },
  };
}
