import Counter from './Counter.svelte';

class CounterElement extends HTMLElement {
    constructor() {
        super();
        new Counter({
            target: this,
        });
    }
}

if (!customElements.get('counter-component')) {
    customElements.define('counter-component', CounterElement);
}

export default Counter;
