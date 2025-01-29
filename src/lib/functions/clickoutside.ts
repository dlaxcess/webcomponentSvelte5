/**
 * Svelte action to handle clicks outside of an element
 * @param node The element to which the action is applied
 * @param options Options for the clickOutside action
 * @returns An action object with a destroy method to clean up event listeners
 */
interface ClickOutsideOptions {
  callback: () => void;
  isOpening?: boolean;
}

export function clickOutside(node: HTMLElement, options: ClickOutsideOptions) {
  // let isOpening = options.isOpening;
  const onClick = (event: MouseEvent) => {
    // if (isOpening) {
    //   isOpening = false;
    //   return;
    // }

    if (options.isOpening) {
      options.isOpening = false;
      return;
    }

    const target = event.target as Node;
    if (!node.contains(target)) {
      options.callback();
    }
  };

  const onKeydown = (event: KeyboardEvent) => {
    if (options.isOpening) {
      options.isOpening = false;
      return;
    }
  };

  document.addEventListener("click", onClick);
  document.addEventListener("keydown", onKeydown);

  return {
    destroy() {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeydown);
    },
    update(newOptions: ClickOutsideOptions) {
      options = newOptions;
    },
  };
}
