/// <reference types="svelte" />
import type { SvelteComponent } from "svelte";
import type { ActionButtonType } from "./components/actionButton/types";
import type { CounterType } from "./components/counter/types";
import type { CounterDisplayType } from "./components/counterDisplay/types";
import type { NotifierType } from "./components/notifier/types";
import type { SecurePinPadElement } from "./components/securePinPad/types";

// Re-export all types for direct access
export * from "./components/actionButton/types";
export * from "./components/counter/types";
export * from "./components/counterDisplay/types";
export * from "./components/notifier/types";
export * from "./components/securePinPad/types";

declare module "webcomponentsvelte5" {
  declare global {
    namespace JSX {
      interface IntrinsicElements {
        "action-button": ActionButtonType;
        "counter-component": CounterType;
        "counterdisplay-component": CounterDisplayType;
        "notifier-component": NotifierType;
        "securepin-component": SecurePinPadElement;
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

declare module "webcomponentsvelte5/components/notifier" {
  export default function (): void;
  export * from "./components/notifier/types";
}
