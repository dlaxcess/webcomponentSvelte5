import { tick } from "svelte";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { expect, test, vi, describe } from "vitest";
import "@testing-library/jest-dom/vitest";

import dropdown from "./dropdown.test.svelte";

describe("Dropdown Component", () => {
  const setupComponent = async () => {
    const { container } = render(dropdown);
    await tick();
    const dropdownElement = screen.getByTestId("dropdown");
    const headingElement = screen.getByTestId("dropdown-heading");
    const contentElement = screen.getByTestId("dropdown-content");
    const triggerButton = screen.getByRole("button", {
      name: "Dropdown Title",
    });

    return { container, dropdownElement, headingElement, contentElement, triggerButton };
  };

  test("should setup component correctly", async () => {
    const { dropdownElement, headingElement, contentElement, triggerButton } = await setupComponent();

    expect(dropdownElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(triggerButton).toBeInTheDocument();
  });

  test("should render with default state (closed) and correct ARIA attributes and role", async () => {
    const { contentElement, triggerButton } = await setupComponent();

    expect(contentElement.hidden).toBe(true);

    expect(triggerButton.getAttribute("aria-expanded")).toBe("false");
    expect(triggerButton.getAttribute("aria-controls")).toBe(contentElement.id);
    expect(contentElement.getAttribute("aria-labelledby")).toBe(triggerButton.id);
    expect(contentElement.getAttribute("role")).toBe("region");
  });

  test("should open when trigger button is clicked and close if clicked again", async () => {
    const { contentElement, triggerButton } = await setupComponent();

    expect(contentElement.hidden).toBe(true);

    const user = userEvent.setup();
    await user.click(triggerButton);
    await tick();

    expect(contentElement.hidden).toBe(false);
    expect(triggerButton.getAttribute("aria-expanded")).toBe("true");

    await user.click(triggerButton);
    await tick();

    expect(contentElement.hidden).toBe(true);
    expect(triggerButton.getAttribute("aria-expanded")).toBe("false");
  });

  test("should close when Escape key is pressed and focus back to trigger", async () => {
    const { contentElement, triggerButton } = await setupComponent();

    const user = userEvent.setup();

    await user.click(triggerButton);
    await tick();
    expect(contentElement.hidden).toBe(false);

    await user.keyboard("{Escape}");
    await tick();

    expect(contentElement.hidden).toBe(true);
    expect(document.activeElement).toBe(triggerButton);
  });

  test("should not respond to Escape key when already closed", async () => {
    const { contentElement, triggerButton } = await setupComponent();

    expect(contentElement.hidden).toBe(true);

    const user = userEvent.setup();

    // Mock focus function to check if it's called
    const focusSpy = vi.spyOn(triggerButton, "focus");

    await user.keyboard("{Escape}");
    await tick();

    expect(focusSpy).not.toHaveBeenCalled();

    expect(contentElement.hidden).toBe(true);

    focusSpy.mockRestore();
  });

  test("should handle keyboard interactions correctly", async () => {
    const { contentElement, triggerButton } = await setupComponent();

    const user = userEvent.setup();

    triggerButton.focus();

    await user.keyboard("{Enter}");
    await tick();
    expect(contentElement.hidden).toBe(false);

    await user.keyboard("{Enter}");
    await tick();
    expect(contentElement.hidden).toBe(true);

    await user.keyboard(" ");
    await tick();
    expect(contentElement.hidden).toBe(false);

    await user.keyboard(" ");
    await tick();
    expect(contentElement.hidden).toBe(true);
  });

  test("should clean up event listeners and attributes when disconnected", async () => {
    // Utiliser setupComponent pour initialiser le composant
    const { container, dropdownElement, headingElement, contentElement, triggerButton } = await setupComponent();
    
    // Vérifier que les attributs sont correctement définis avant le démontage
    expect(triggerButton).toHaveAttribute("aria-expanded", "false");
    expect(triggerButton).toHaveAttribute("aria-controls");
    expect(contentElement).toHaveAttribute("id");
    expect(contentElement).toHaveAttribute("aria-labelledby");
    expect(contentElement).toHaveAttribute("role", "region");
    
    // Vérifier que le bouton est présent dans le DOM avant le démontage
    expect(screen.getByRole("button", { name: "Dropdown Title" })).toBeInTheDocument();
    
    // Nous allons vérifier que les écouteurs d'événements sont bien supprimés lors du démontage
    // et que le bouton est retiré du headingElement tout en conservant son contenu textuel
    
    // Utiliser vi.spyOn pour surveiller les appels à removeEventListener
    const clickSpy = vi.spyOn(triggerButton, 'removeEventListener');
    
    // Accéder au conteneur du dropdown dans le Shadow DOM
    const dropdownContainer = dropdownElement.shadowRoot?.querySelector(".dropdown") as HTMLElement;
    
    // Espionner removeEventListener sur le conteneur du dropdown si accessible
    let keydownSpy;
    if (dropdownContainer) {
      keydownSpy = vi.spyOn(dropdownContainer, 'removeEventListener');
    }
    
    // Retirer le composant du DOM pour déclencher le nettoyage
    container.removeChild(dropdownElement);
    
    // Attendre que le callback de nettoyage soit appelé
    await tick();
    
    // Vérifier que les écouteurs d'événements ont été supprimés
    expect(clickSpy).toHaveBeenCalledWith("click", expect.anything());
    
    // Vérifier que l'écouteur d'événement keydown a été supprimé si nous avons pu l'intercepter
    if (keydownSpy) {
      expect(keydownSpy).toHaveBeenCalledWith("keydown", expect.anything());
    }
    
    // Vérifier que le bouton a été retiré du heading
    const buttonAfterDismount = screen.queryByRole("button", { name: "Dropdown Title" });
    expect(buttonAfterDismount).toBeNull();
    
    // Vérifier que le bouton n'est plus connecté au DOM
    expect(triggerButton.isConnected).toBe(false);
    expect(triggerButton.parentElement).toBeNull();
    
    // Vérifier que le contenu textuel du heading a été préservé
    expect(headingElement.textContent?.trim()).toBe("Dropdown Title");
    
    // Vérifier que les attributs ont bien été retirés du contenu
    expect(contentElement.hasAttribute("id")).toBe(false);
    expect(contentElement.hasAttribute("aria-labelledby")).toBe(false);
    expect(contentElement.hasAttribute("role")).toBe(false);
    expect(contentElement.hasAttribute("hidden")).toBe(false);
    
    // Vérifier que les attributs ont bien été retirés du bouton déclencheur
    expect(triggerButton.hasAttribute("id")).toBe(false);
    expect(triggerButton.hasAttribute("aria-controls")).toBe(false);
    expect(triggerButton.hasAttribute("aria-expanded")).toBe(false);
    
    // Restaurer les mocks pour éviter d'affecter d'autres tests
    clickSpy.mockRestore();
    if (keydownSpy) {
      keydownSpy.mockRestore();
    }
  });
});
