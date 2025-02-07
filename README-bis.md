# WebcomponentSvelte5 Library

Library of Web Components built with Svelte 5, offering reusable and framework-agnostic UI components that can be integrated into any web application.

## Features

- 🎯 Framework-agnostic components
- 🚀 Built with Svelte 5
- 📦 Easy to integrate
- 🎨 Customizable through CSS variables
- ♿ Accessibility-focused
- 🔧 TypeScript support

## Installation

```bash
pnpm install webcomponentSvelte5 # Library not published for now (use pnpm workspace).
```

## Scripts

```bash
pnpm run build # build individuals components & bundle

pnpm run watch # watch for individuals components changes

pnpm run watch-bundle # watch for bundle changes

pnpm run check # launch Svelte checks

pnpm test    #launch unit tests
pnpm test:ui # lauch tests with UI

```

## Available Components

The library includes the following components:

### [Action Button](src/lib/components/actionButton/README.md)

A button wrapper component that handles clipboard copy and web sharing functionality.

### [Notifier](src/lib/components/notifier/README.md)

A customizable notification system for displaying success and error messages.

## Documentation

Each component has its own detailed documentation. Click the links in the "Available Components" section above to learn more about specific components.

## Usage

### ES Modules

You can either import and use components individually in your project:

```html
<!-- HTML -->
<script type="module">
  import "webcomponentSvelte5/components/actionButton";
  import "webcomponentSvelte5/components/notifier";
  // Import other components as needed
</script>
```

```javascript
// Javascript
import "webcomponentSvelte5/components/actionButton";
import "webcomponentSvelte5/components/notifier";
// Import other components as needed
```

Or import all components at once using the complete bundle:

```html
<script type="module">
  import "webcomponentSvelte5";
</script>
```

### CommonJS

(Only for bundle)

```javascript
require("webcomponentSvelte5");
```

## How to Add a New Web Component

1.  **Structure Creation**

    - Create a new folder in `src/lib/components` with the `componentName`
    - Create the following files in this folder:
      - `ComponentName.svelte`: The Svelte component
      - `index.js`: The web component export file
      - `types.ts`: TypeScript definitions
      - `README.md`: Document component props and events

2.  **Implementation**

    - In `ComponentName.svelte`:

      ```svelte
      <svelte:options customElement="component-name" />
      <script lang="ts">
          // Define your props and component logic
      </script>

      <!-- Component template -->
      ```

    - In `index.js`:

      ```javascript
      import ComponentName from "./ComponentName.svelte";
      /** @typedef {import('svelte').SvelteComponent} SvelteComponent */

      class ComponentNameElement extends HTMLElement {
      /** @type {SvelteComponent|undefined} */
          _element;

          constructor() {
            super();
            this.shadowRoot = this.attachShadow({ mode: 'open' });
          }
          connectedCallback() {
            this._element = new ComponentName({
                target: this.shadowRoot
          });

          disconnectedCallback() {
            this._element?.destroy();
          }
      }
      if (!customElements.get("component-name")) {
        customElements.define("component-name", ComponentNameElement);
      }
      export default ComponentName;
      ```

    - In `types.ts`:

      ```typescript
      // Define types for component props and events
      ```

3.  **Library Integration**

    - Add the import in `src/lib/index.js`:
      ```javascript
      export { default as ComponentName } "./components/component-name/index.js";
      ```
    - Add types in `src/lib/index.d.ts`:

      ```typescript
      import type { ComponentNameType } from "./components/component-name/types";

      export * from "./components/component-name/types";

      declare module "webcomponents" {
        declare global {
          namespace JSX {
            interface IntrinsicElements {
              [...]
              "component-name": ComponentNameType;
            }
          }
        }
      }

      declare module "webcomponents/components/componentName" {
        export default function (): void;
        export * from "./components/componentName/types";
      }
      ```

4.  **Testing and Documentation**

    - Add unit tests if needed
    - Update documentation with component props and events & usage examples

## Tests

Tests use [shadow-dom-testing-library](https://github.com/KonnorRogers/shadow-dom-testing-library) to interact with shadow DOM.

## Browser Support

This library supports all modern browsers that implement the Web Components specifications:

- Chrome/Chromium
- Firefox
- Safari
- Edge
