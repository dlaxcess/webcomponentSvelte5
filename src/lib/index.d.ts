/// <reference types="svelte" />
import type { SvelteComponent } from "svelte";
import type { ActionButtonType } from "./components/actionButton/types";
import type { CounterType } from "./components/counter/types";
import type { CounterDisplayType } from "./components/counterDisplay/types";
import type { ToasterType } from "./components/toaster/types";
import type { SecurePinPadElement } from "./components/securePinPad/types";

declare module "webcomponentsvelte5" {
  declare global {
    namespace JSX {
      interface IntrinsicElements {
        "action-button": ActionButtonType;
        "counter-component": CounterType;
        "counterdisplay-component": CounterDisplayType;
        "securepin-component": SecurePinPadElement;
        "toaster-component": ToasterType;
      }
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

declare module "webcomponentsvelte5/components/securePinPad" {
  export default function (): void;
  export * from "./components/securePinPad/types";
}

declare module "webcomponentsvelte5/components/toaster" {
  export default function (): void;
  export * from "./components/toaster/types";
}
