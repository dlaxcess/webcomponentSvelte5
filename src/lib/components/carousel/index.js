// @ts-check
import Carousel from './Carousel.svelte';

/** @typedef {import('svelte').SvelteComponent} SvelteComponent */

class CarouselElement extends HTMLElement {
    /** @type {SvelteComponent|undefined} */
    _element;

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this._element = new Carousel({
            target: this.shadowRoot
        });
    }

    disconnectedCallback() {
        this._element?.destroy();
    }
}

if (!customElements.get('pc-carousel')) {
    customElements.define('pc-carousel', CarouselElement);
}

export default Carousel;
