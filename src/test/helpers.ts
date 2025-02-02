export function createTestElement(tagName: string) {
  const element = document.createElement(tagName);
  document.body.appendChild(element);
  return element;
}

export function cleanupTestElement(element: Element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

export function waitForElement(selector: string, timeout = 2000): Promise<Element> {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found after ${timeout}ms`));
    }, timeout);
  });
}

export function dispatchNotifyEvent(detail: {
  message: string;
  type?: 'success' | 'error';
  duration?: number;
}) {
  const event = new CustomEvent('notify', { detail });
  document.dispatchEvent(event);
}
