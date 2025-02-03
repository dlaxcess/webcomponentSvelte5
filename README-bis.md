# WebComponentSvelte5 Library

A modern library of Web Components built with Svelte 5, offering reusable and framework-agnostic UI components that can be integrated into any web application.

## Features

- 🎯 Framework-agnostic components
- 🚀 Built with Svelte 5
- 📦 Easy to integrate
- 🎨 Customizable through CSS variables
- ♿ Accessibility-focused
- 🔧 TypeScript support

## Installation

```bash
npm install webcomponentsvelte5
```

## Available Components

The library includes the following components:

### [Action Button](src/lib/components/actionButton/README.md)

A versatile button component that handles clipboard operations and web sharing functionality.

### [Notifier](src/lib/components/notifier/README.md)

A customizable notification system for displaying success and error messages.

### Counter

A simple counter component with increment and decrement functionality.

### Counter Display

A component for displaying counter values with customizable formatting.

### Secure Pin Pad

A secure input component for PIN/password entry.

## Usage

### ES Modules

You can either import all components at once using the complete bundle:

```html
<script type="module">
  import "webcomponentsvelte5";
</script>
```

Or import components individually as needed:

```html
<script type="module">
  import "webcomponentsvelte5/components/actionButton";
  import "webcomponentsvelte5/components/notifier";
  // Import other components as needed
</script>
```

### CommonJS

You can import the complete bundle in Node.js environments:

```javascript
require("webcomponentsvelte5");
```

### Usage in HTML

```html
<!-- Use components in your HTML -->
<action-button action="copy" entry="Text to copy">
  <button slot="button">Copy</button>
</action-button>

<notifier-component></notifier-component>
```

## How to Add a New Web Component

1.  **Structure Creation**

    - Create a new folder in `src/lib/components` with the `componentName`
    - Create the following files in this folder:
      - `ComponentName.svelte`: The Svelte component
      - `index.js`: The web component export file
      - `types.d.ts`: TypeScript definitions

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
        }
        connectedCallback() {
          this._element = new ComponentName({
            target: this
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

    - In `types.d.ts`:

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

      declare module "webcomponentsvelte5" {
        declare global {
          namespace JSX {
            interface IntrinsicElements {
              [...]
              "component-name": ComponentNameType;
            }
          }
        }
      }

      declare module "webcomponentsvelte5/components/componentName" {
        export default function (): void;
        export * from "./components/componentName/types";
      }
      ```

4.  **Testing and Documentation**

    - Add unit tests if needed
    - Document component props and events
    - Update documentation with usage examples

## Documentation

Each component has its own detailed documentation. Click the links in the "Available Components" section above to learn more about specific components.

## Browser Support

This library supports all modern browsers that implement the Web Components specifications:

- Chrome/Chromium
- Firefox
- Safari
- Edge

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.
