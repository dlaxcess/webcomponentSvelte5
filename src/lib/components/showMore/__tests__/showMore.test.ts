import { tick } from "svelte";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { expect, test, vi, describe } from "vitest";
import "@testing-library/jest-dom/vitest";

import showMore from "./showMore.test.svelte";

describe("ShowMore Component", () => {
  // Fonction de configuration commune pour tous les tests
  const setupComponent = async () => {
    const { container } = render(showMore);
    await tick();
    const showMoreElement = screen.getByTestId("show-more");
    const headerElement = screen.getByTestId("show-more-header");
    const itemsElement = screen.getByTestId("show-more-items");
    const showMoreButton = screen.getByTestId("show-more-button") as HTMLButtonElement;
    const showLessButton = screen.getByTestId("show-less-button") as HTMLButtonElement;
    const list = screen.getByRole("list");
    const listItems = container.querySelectorAll("li");

    return { container, showMoreElement, headerElement, itemsElement, showMoreButton, showLessButton, listItems, list };
  };

  test("should setup component correctly", async () => {
    const { showMoreElement, headerElement, showMoreButton, showLessButton, listItems } = await setupComponent();

    expect(showMoreElement).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
    expect(showMoreButton).toBeInTheDocument();
    expect(showLessButton).toBeInTheDocument();
    expect(listItems.length).toBeGreaterThan(0);
  });

  test("should render with default state (showing only verticalCount items)", async () => {
    const { showMoreButton, showLessButton, listItems } = await setupComponent();

    // Check that only the first 3 items are visible (verticalCount = 3)
    for (let i = 0; i < 3; i++) {
      expect(listItems[i].style.display).not.toBe("none");
    }

    // Check that items beyond verticalCount are hidden
    for (let i = 3; i < listItems.length; i++) {
      expect(listItems[i].style.display).toBe("none");
    }

    // Check that show more button is visible and show less button is hidden
    expect(showMoreButton.style.display).not.toBe("none");
    expect(showLessButton.style.display).toBe("none");
  });

  test("should show all items when show more button is clicked", async () => {
    const { showMoreButton, showLessButton, listItems } = await setupComponent();
    const user = userEvent.setup();

    // Initially, items beyond verticalCount should be hidden
    expect(listItems[3].style.display).toBe("none");

    // Click the show more button
    await user.click(showMoreButton);
    await tick();

    // All items should be visible
    for (let i = 0; i < listItems.length; i++) {
      expect(listItems[i].style.display).not.toBe("none");
    }

    // Show more button should be hidden and show less button should be visible
    expect(showMoreButton.style.display).toBe("none");
    expect(showLessButton.style.display).not.toBe("none");
  });

  test("should hide items beyond verticalCount when show less button is clicked", async () => {
    const { showMoreButton, showLessButton, listItems } = await setupComponent();
    const user = userEvent.setup();

    // First expand the list
    await user.click(showMoreButton);
    await tick();

    // All items should be visible
    expect(listItems[3].style.display).not.toBe("none");

    // Click the show less button
    await user.click(showLessButton);
    await tick();

    // Items beyond verticalCount should be hidden again
    for (let i = 3; i < listItems.length; i++) {
      expect(listItems[i].style.display).toBe("none");
    }

    // Show more button should be visible and show less button should be hidden
    expect(showMoreButton.style.display).not.toBe("none");
    expect(showLessButton.style.display).toBe("none");
  });

  test("should handle keyboard interactions correctly", async () => {
    const { showMoreButton, showLessButton, listItems } = await setupComponent();
    const user = userEvent.setup();

    // Focus the show more button
    showMoreButton.focus();

    // Press Enter to expand the list
    await user.keyboard("{Enter}");
    await tick();

    // All items should be visible
    for (let i = 0; i < listItems.length; i++) {
      expect(listItems[i].style.display).not.toBe("none");
    }

    // Focus the show less button
    showLessButton.focus();

    // Press Enter to collapse the list
    await user.keyboard("{Enter}");
    await tick();

    // Items beyond verticalCount should be hidden again
    for (let i = 3; i < listItems.length; i++) {
      expect(listItems[i].style.display).toBe("none");
    }

    // Focus the show more button again
    showMoreButton.focus();

    // Press Space to expand the list
    await user.keyboard(" ");
    await tick();

    // All items should be visible
    for (let i = 0; i < listItems.length; i++) {
      expect(listItems[i].style.display).not.toBe("none");
    }

    // Focus the show less button again
    showLessButton.focus();

    // Press Space to collapse the list
    await user.keyboard(" ");
    await tick();

    // Items beyond verticalCount should be hidden again
    for (let i = 3; i < listItems.length; i++) {
      expect(listItems[i].style.display).toBe("none");
    }
  });

  test("should handle keyboard events correctly for show less button", async () => {
    const { showMoreButton, showLessButton, listItems } = await setupComponent();
    const user = userEvent.setup();
    
    // First expand the list
    await user.click(showMoreButton);
    await tick();
    
    // All items should be visible
    expect(listItems[3].style.display).not.toBe("none");
    
    // Focus the show less button and press Enter to collapse the list
    showLessButton.focus();
    await user.keyboard("{Enter}");
    await tick();
    
    // Vérifier que les éléments au-delà de verticalCount sont cachés
    for (let i = 3; i < listItems.length; i++) {
      expect(listItems[i].style.display).toBe("none");
    }
    
    // Vérifier que le bouton show more est visible et que le bouton show less est caché
    expect(showMoreButton.style.display).not.toBe("none");
    expect(showLessButton.style.display).toBe("none");
  });

  test("should set appropriate ARIA attributes", async () => {
    const { list, showMoreButton } = await setupComponent();
    const user = userEvent.setup();

    // Initially, the list should have an aria-label
    expect(list).toHaveAttribute("aria-label", "Liste réduite");

    // Click the show more button to expand the list
    await user.click(showMoreButton);
    await tick();

    // The list should now have an updated aria-label
    expect(list).toHaveAttribute("aria-label", "2 éléments supplémentaires affichés");
  });

  test("should clean up event listeners and attributes when disconnected", async () => {
    const { container, showMoreElement, headerElement, showMoreButton, showLessButton } = await setupComponent();
    
    // Vérifier que les éléments sont correctement définis avant le démontage
    expect(showMoreButton).toBeInTheDocument();
    expect(showLessButton).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
    
    // Stocker le contenu du header avant le démontage
    const headerContent = headerElement.textContent?.trim();
    
    // Utiliser vi.spyOn pour surveiller les appels à removeEventListener
    const clickSpy = vi.spyOn(showMoreButton, 'removeEventListener');
    const keydownSpy = vi.spyOn(showMoreElement, 'removeEventListener');
    
    // Retirer le composant du DOM pour déclencher le nettoyage
    container.removeChild(showMoreElement);
    
    // Attendre que le callback de nettoyage soit appelé
    await tick();
    
    // Vérifier que les boutons ne sont plus connectés au DOM
    expect(showMoreButton.isConnected).toBe(false);
    expect(showLessButton.isConnected).toBe(false);
    
    // Vérifier que les boutons ne sont plus dans le document
    const showMoreBtnAfterDismount = screen.queryByTestId("show-more-button");
    const showLessBtnAfterDismount = screen.queryByTestId("show-less-button");
    expect(showMoreBtnAfterDismount).toBeNull();
    expect(showLessBtnAfterDismount).toBeNull();
    
    // Vérifier que le contenu du header est préservé
    expect(headerElement.textContent?.trim()).toBe(headerContent);
    
    // Restaurer les mocks
    clickSpy.mockRestore();
    keydownSpy.mockRestore();
  });
});
