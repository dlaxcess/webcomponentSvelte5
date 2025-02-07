// @ts-check
import ActionButton from './ActionButton.svelte';

/** @typedef {import('svelte').SvelteComponent} SvelteComponent */

class ActionButtonElement extends HTMLElement {
    /** @type {SvelteComponent|undefined} */
    _element;

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this._element = new ActionButton({
            target: this.shadowRoot
        });
    }

    disconnectedCallback() {
        this._element?.destroy();
    }
}

if (!customElements.get('action-button')) {
    customElements.define('action-button', ActionButtonElement);
}

export default ActionButton;
