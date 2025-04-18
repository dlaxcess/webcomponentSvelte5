// @ts-check
import Slider from "./Slider.svelte";

/** @typedef {import('svelte').SvelteComponent} SvelteComponent */

class SliderElement extends HTMLElement {
  /** @type {SvelteComponent|undefined} */
  _element;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._element = new Slider({
      target: this.shadowRoot,
    });
  }

  disconnectedCallback() {
    this._element?.destroy();
  }
}

if (!customElements.get("pc-slider")) {
  customElements.define("pc-slider", SliderElement);
}

export default Slider;