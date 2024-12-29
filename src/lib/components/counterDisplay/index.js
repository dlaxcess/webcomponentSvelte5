import CounterDisplay from './CounterDisplay.svelte';

class CounterDisplayElement extends HTMLElement {
    constructor() {
        super();
        new CounterDisplay({
            target: this,
        });
    }
}

if (!customElements.get('counterdisplay-component')) {
    customElements.define('counterdisplay-component', CounterDisplayElement);
}

export default CounterDisplay;
