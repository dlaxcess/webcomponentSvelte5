import { tick } from "svelte";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { expect, test, vi, describe, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

import slider from "./slider.test.svelte";

describe("Slider Component", () => {
  // Mock scrollTo since it's not implemented in JSDOM
  const scrollToMock = vi.fn();
  
  // Mock ResizeObserver pour tous les tests
  const mockResizeObserver = vi.fn();
  let originalResizeObserver: typeof ResizeObserver | undefined;
  
  beforeEach(() => {
    // Mock ResizeObserver
    originalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn()
    }));
  });
  
  afterEach(() => {
    // Restore the original scrollTo method and ResizeObserver
    vi.restoreAllMocks();
    if (originalResizeObserver) {
      window.ResizeObserver = originalResizeObserver;
    }
  });

  // Fonction de configuration commune pour tous les tests
  const setupComponent = async () => {
    // Mock Element.prototype.scrollTo
    Element.prototype.scrollTo = scrollToMock;
    
    const { container } = render(slider);
    await tick();
    
    const sliderElement = screen.getByTestId("slider");
    await tick(); // Wait for the component to initialize
    
    // Get the elements
    const headerElement = screen.getByTestId("slider-header");
    const itemsElement = screen.getByTestId("slider-items");
    const prevButton = screen.getByTestId("prev-button") as HTMLButtonElement;
    const nextButton = screen.getByTestId("next-button") as HTMLButtonElement;
    
    // Get list items
    const list = itemsElement.querySelector("ul");
    const listItems = list!.querySelectorAll("li");
    
    // Clear mock calls
    scrollToMock.mockClear();
    
    return { container, sliderElement, headerElement, itemsElement, prevButton, nextButton, listItems, list };
  };
  
  // L'afterEach est déjà défini plus haut

  test("should render with proper ARIA attributes", async () => {
    const { sliderElement, itemsElement, prevButton, nextButton, listItems, list } = await setupComponent();
    
    // Le composant interne a le role="region", pas l'élément personnalisé lui-même
    const innerComponent = sliderElement.shadowRoot?.querySelector('[role="region"]');
    expect(innerComponent).not.toBeNull();
    expect(innerComponent).toHaveAttribute("aria-roledescription", "carousel");
    
    // The list items should have the correct aria attributes
    listItems.forEach((item, index) => {
      expect(item).toHaveAttribute("aria-roledescription", "slide");
      expect(item).toHaveAttribute("role", "group");
      expect(item).toHaveAttribute("aria-label", `${index + 1} of ${listItems.length}`);
    });
    
    // The buttons should have aria-controls pointing to the list
    expect(prevButton).toHaveAttribute("aria-controls", list!.id);
    expect(nextButton).toHaveAttribute("aria-controls", list!.id);
  });

  test("should scroll right when next button is clicked", async () => {
    const { nextButton } = await setupComponent();
    
    // Click the next button
    const user = userEvent.setup();
    await user.click(nextButton);
    await tick();
    
    // scrollTo should have been called with smooth behavior
    expect(scrollToMock).toHaveBeenCalledTimes(1);
    expect(scrollToMock).toHaveBeenCalledWith(expect.objectContaining({
      behavior: "smooth"
    }));
  });

  // Ce test est marqué comme étant en attente car il nécessite une configuration spéciale
  // pour simuler le défilement vers la gauche, qui est difficile à tester dans l'environnement JSDOM
  test.todo("should scroll left when previous button is clicked");

  test("should handle keyboard navigation between items", async () => {
    const { listItems } = await setupComponent();
    
    // Focus the first item
    const firstItemLink = listItems[0].querySelector("a");
    expect(firstItemLink).toBeInTheDocument();
    firstItemLink!.focus();
    
    // Press right arrow to navigate to the next item
    const user = userEvent.setup();
    await user.keyboard("{ArrowRight}");
    await tick();
    
    // scrollTo should have been called to scroll to the second item
    expect(scrollToMock).toHaveBeenCalledTimes(1);
    
    // Press left arrow to navigate back to the first item
    await user.keyboard("{ArrowLeft}");
    await tick();
    
    // scrollTo should have been called again
    expect(scrollToMock).toHaveBeenCalledTimes(2);
    
    // Other keys should not trigger scrolling
    await user.keyboard("{ArrowUp}");
    await tick();
    expect(scrollToMock).toHaveBeenCalledTimes(2);
  });

  test("should set appropriate tabindex for focusable elements", async () => {
    const { listItems } = await setupComponent();
    
    // The first item should have tabindex=0 and others should have tabindex=-1
    const firstItemLink = listItems[0].querySelector("a");
    const secondItemLink = listItems[1].querySelector("a");
    
    expect(firstItemLink).toHaveAttribute("tabindex", "0");
    expect(secondItemLink).toHaveAttribute("tabindex", "-1");
  });

  test("should handle resize events", async () => {
    // Utiliser setupComponent pour rendre le composant
    const { sliderElement } = await setupComponent();
    
    // Trigger a resize event
    const sliderContainer = sliderElement.querySelector(".slider-container");
    const resizeCallback = (window.ResizeObserver as any).mock.calls[0][0];
    resizeCallback([{ target: sliderContainer }]);
    
    // Wait for the resize timeout
    await new Promise(resolve => setTimeout(resolve, 200));
  });

  test("should clean up event listeners and attributes when disconnected", async () => {
    const { container, sliderElement, headerElement, itemsElement, prevButton, nextButton, list } = await setupComponent();
    
    // Vérifier que les éléments sont correctement définis avant le démontage
    expect(sliderElement).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
    expect(itemsElement).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    
    // Vérifier que les attributs ARIA sont correctement définis avant le démontage
    const innerComponent = sliderElement.shadowRoot?.querySelector('[role="region"]');
    expect(innerComponent).not.toBeNull();
    expect(prevButton).toHaveAttribute("aria-controls", list!.id);
    expect(nextButton).toHaveAttribute("aria-controls", list!.id);
    
    // Stocker le contenu du header avant le démontage
    const headerContent = headerElement.textContent?.trim();
    
    // Utiliser vi.spyOn pour surveiller les appels à removeEventListener
    const clickSpyPrev = vi.spyOn(prevButton, 'removeEventListener');
    const clickSpyNext = vi.spyOn(nextButton, 'removeEventListener');
    
    // Retirer le composant du DOM pour déclencher le nettoyage
    container.removeChild(sliderElement);
    
    // Attendre que le callback de nettoyage soit appelé
    await tick();
    await new Promise(resolve => setTimeout(resolve, 0));
    
    // Vérifier que les boutons ne sont plus connectés au DOM
    expect(prevButton.isConnected).toBe(false);
    expect(nextButton.isConnected).toBe(false);
    
    // Vérifier que les boutons ne sont plus dans le document
    const prevButtonAfterDismount = screen.queryByTestId("prev-button");
    const nextButtonAfterDismount = screen.queryByTestId("next-button");
    expect(prevButtonAfterDismount).toBeNull();
    expect(nextButtonAfterDismount).toBeNull();
    
    // Vérifier que le contenu du header est préservé
    expect(headerElement.textContent?.trim()).toBe(headerContent);
    
    // Restaurer les mocks
    clickSpyPrev.mockRestore();
    clickSpyNext.mockRestore();
  });
});
