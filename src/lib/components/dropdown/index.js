import Dropdown from './Dropdown.svelte';

class DropdownElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Track internal button
    this._internalButton = null;

    // Create bound method for event listeners
    this._handleFocus = this._handleFocus.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);

    // Forward focus to internal button
    this.addEventListener('focus', this._handleFocus);
  }

  _handleFocus() {
    if (this._internalButton) {
      this._internalButton.focus();
    }
  }

  _handleSlotChange() {
    this.findInternalButton();
  }

  findInternalButton() {
    const triggerSlot = this.querySelector('slot[name="dropdown-trigger"]');
    if (triggerSlot instanceof HTMLSlotElement) {
      const elements = triggerSlot.assignedElements();
      const button = elements[0]?.querySelector('button');
      if (button) {
        this._internalButton = button;
      }
    }
  }

  connectedCallback() {
    // Make the element focusable
    this.setAttribute('tabindex', '0');
    
    this._element = new Dropdown({
      target: this.shadowRoot,
    });
    
    // Initial button find
    this.findInternalButton();

    // Listen for slot changes to update button reference
    const triggerSlot = this.querySelector('slot[name="dropdown-trigger"]');
    if (triggerSlot) {
      triggerSlot.addEventListener('slotchange', this._handleSlotChange);
    }
  }

  disconnectedCallback() {
    // Remove event listeners
    this.removeEventListener('focus', this._handleFocus);
    
    // Remove slot listener if it exists
    const triggerSlot = this.querySelector('slot[name="dropdown-trigger"]');
    if (triggerSlot) {
      triggerSlot.removeEventListener('slotchange', this._handleSlotChange);
    }
    
    this._element.$destroy();
  }
}

// Register the custom element
customElements.define('pc-dropdown', DropdownElement);

export default DropdownElement;
