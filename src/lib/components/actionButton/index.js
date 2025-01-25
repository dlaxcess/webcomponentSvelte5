import ActionButton from './ActionButton.svelte';

class ActionButtonElement extends HTMLElement {
    constructor() {
        super();
        new ActionButton({
            target: this,
        });
    }
}

if (!customElements.get('action-button')) {
    customElements.define('action-button', ActionButtonElement);
}

export default ActionButton;
