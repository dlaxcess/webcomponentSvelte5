/// <reference types="svelte" />
import type { SvelteComponent } from "svelte";
import type { ActionButtonType } from "./components/actionButton/types";
import type { CounterType } from "./components/counter/types";
import type { CounterDisplayType } from "./components/counterDisplay/types";
import type { NotifierType } from "./components/notifier/types";
import type { SecurePinPadElement } from "./components/securePinPad/types";
import type { DropdownType } from "./components/dropdown/types";
import type { ListSectionType } from "./components/listSection/types";
import type { ShowMoreType } from "./components/showMore/types";
import type { SliderType } from "./components/slider/types";

// Re-export all types for direct access
export * from "./components/actionButton/types";
export * from "./components/counter/types";
export * from "./components/counterDisplay/types";
export * from "./components/notifier/types";
export * from "./components/securePinPad/types";
export * from "./components/dropdown/types";
export * from "./components/listSection/types";
export * from "./components/showMore/types";
export * from "./components/slider/types";

declare module "webcomponentsvelte5" {
  declare global {
    interface HTMLElementTagNameMap {
      "action-button": ActionButtonType;
      "counter-component": CounterType;
      "counter-display": CounterDisplayType;
      "notifier-component": NotifierType;
      "securepin-component": SecurePinPadElement;
      "pc-dropdown": DropdownType;
      "pc-list-section": ListSectionType;
      "pc-show-more": ShowMoreType;
      "pc-slider": SliderType;
    }
  }
}

declare module "webcomponentsvelte5/components/actionButton" {
  export default function (): void;
  export * from "./components/actionButton/types";
}

declare module "webcomponentsvelte5/components/counter" {
  export default function (): void;
  export * from "./components/counter/types";
}

declare module "webcomponentsvelte5/components/counterDisplay" {
  export default function (): void;
  export * from "./components/counterDisplay/types";
}

declare module "webcomponentsvelte5/components/notifier" {
  export default function (): void;
  export * from "./components/notifier/types";
}

declare module "webcomponentsvelte5/components/securePinPad" {
  export default function (): void;
  export * from "./components/securePinPad/types";
}

declare module "webcomponentsvelte5/components/dropdown" {
  export default function (): void;
  export * from "./components/dropdown/types";
}

declare module "webcomponentsvelte5/components/listSection" {
  export default function (): void;
  export * from "./components/listSection/types";
}

declare module "webcomponentsvelte5/components/showMore" {
  export default function (): void;
  export * from "./components/showMore/types";
}

declare module "webcomponentsvelte5/components/slider" {
  export default function (): void;
  export * from "./components/slider/types";
}

declare module "webcomponentsvelte5" {
  export class ActionButton extends HTMLElement implements ActionButtonType {}
  export class Counter extends HTMLElement implements CounterType {}
  export class CounterDisplay extends HTMLElement implements CounterDisplayType {}
  export class Notifier extends HTMLElement implements NotifierType {}
  export class SecurePinPad extends HTMLElement implements SecurePinPadElement {}
  export class Slider extends HTMLElement implements SliderType {}
  export class Dropdown extends HTMLElement implements DropdownType {}
  export class ListSection extends HTMLElement implements ListSectionType {}
  export class ShowMore extends HTMLElement implements ShowMoreType {}
}
