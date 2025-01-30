/**
 * Svelte action to handle clicks outside of an element
 * @param node The element to which the action is applied
 * @param callback Callback for the clickOutside action
 * @returns An action object with a destroy method to clean up event listeners
 */
export function clickOutside(node: HTMLElement, callback: () => void) {
  const onClick = (event: MouseEvent) => {
    const target = event.target as Node;
    if (!node.contains(target)) {
      callback();
    }
  };

  document.addEventListener("click", onClick);

  return {
    destroy() {
      document.removeEventListener("click", onClick);
    },
  };
}
