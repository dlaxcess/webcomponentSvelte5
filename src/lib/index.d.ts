/// <reference types="svelte" />
import type { SvelteComponent } from "svelte";
import type { CounterType } from "./components/counter/types";
import type { CounterDisplayType } from "./components/counterDisplay/types";
import type { ActionButtonType } from "./components/actionButton/types";

declare module "webcomponentsvelte5" {
  declare global {
    namespace JSX {
      interface IntrinsicElements {
        "counter-component": CounterType;
        "counterdisplay-component": CounterDisplayType;
        "action-button": ActionButtonType;
      }
    }
  }
}

declare module "webcomponentsvelte5/components/counter" {
  export default function (): void;
  export * from "./components/counter/types";
}

declare module "webcomponentsvelte5/components/counterDisplay" {
  export default function (): void;
  export * from "./components/counterDisplay/types";
}

declare module "webcomponentsvelte5/components/actionButton" {
  export default function (): void;
  export * from "./components/actionButton/types";
}
