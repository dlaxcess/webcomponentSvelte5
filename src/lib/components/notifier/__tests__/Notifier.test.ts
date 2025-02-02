import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createTestElement, cleanupTestElement, dispatchNotifyEvent } from '../../../../test/helpers';
import '../Notifier.svelte';

describe('Notifier Component', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    vi.useFakeTimers();
    document.body.innerHTML = '';
    // Attendre que le composant soit défini
    await customElements.whenDefined('notifier-component');
    element = createTestElement('notifier-component');
    // Attendre le prochain tick pour que le composant soit initialisé
    await vi.runAllTimersAsync();
  });

  afterEach(() => {
    cleanupTestElement(element);
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  function getDialog(): HTMLDialogElement | null {
    return element.shadowRoot?.querySelector('dialog') || null;
  }

  it('should render with default values', () => {
    const dialog = getDialog();
    expect(dialog).toBeTruthy();
  });

  it('should show notification when notify event is dispatched', async () => {
    const dialog = getDialog();
    
    dispatchNotifyEvent({
      message: 'Test message',
      type: 'success',
      duration: 1000
    });

    // Attendre que le message soit mis à jour
    await vi.runAllTimersAsync();
    const messageElement = dialog?.querySelector('p');
    expect(messageElement?.textContent?.trim()).toBe('Test message');
  });

  it('should close notification after duration', async () => {
    const dialog = getDialog();
    expect(dialog).toBeTruthy();

    // Espionner la méthode close avant de lancer l'événement
    const closeSpy = vi.spyOn(dialog as HTMLDialogElement, 'close');
    
    // Simuler l'ouverture du dialog
    (dialog as HTMLDialogElement).show();
    Object.defineProperty(dialog, 'open', { get: () => true });
    
    dispatchNotifyEvent({
      message: 'Test message',
      type: 'success',
      duration: 1000
    });

    // Attendre que le dialog soit initialisé
    await vi.runAllTimersAsync();
    // Avancer le temps pour déclencher la fermeture
    await vi.advanceTimersByTimeAsync(1000);
    // Attendre que la fermeture soit traitée
    await vi.runAllTimersAsync();

    expect(closeSpy).toHaveBeenCalled();
  });

  it('should show error notification with correct role and aria-live', async () => {
    const dialog = getDialog();
    
    dispatchNotifyEvent({
      message: 'Error message',
      type: 'error',
      duration: 0
    });

    // Attendre que les attributs soient mis à jour
    await vi.runAllTimersAsync();
    expect(dialog?.getAttribute('role')).toBe('alert');
    expect(dialog?.getAttribute('aria-live')).toBe('assertive');
  });

  it('should be closeable when duration is 0', async () => {
    const dialog = getDialog();
    
    dispatchNotifyEvent({
      message: 'Test message',
      type: 'success',
      duration: 0
    });

    // Attendre que les classes soient mises à jour
    await vi.runAllTimersAsync();
    const closeButton = dialog?.querySelector('button');
    expect(closeButton?.classList.contains('closeable')).toBeTruthy();
  });
});
