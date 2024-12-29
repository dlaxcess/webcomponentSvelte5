# WebComponentSvelte5

A library of web components built with Svelte 5. This library provides reusable web components that can be used in any JavaScript framework or vanilla HTML.

```bash
# Original install command for Svelte 5
pnpm create vite@latest
```

## Features

- Framework-agnostic web components
- Real-time counter with event system
- Individual component imports for better tree-shaking
- Customizable components
- TypeScript support

## Installation

```bash
pnpm add github:dlaxcess/webcomponentSvelte5
```

## Basic Usage

### Vanilla HTML/JavaScript

( Open test.html or test-individual.html in your browser )
You can import and use the components in two ways:

#### 1. Import all components (Bundle)

```html
<script type="module">
  import "./dist/webComponentSvelte5.es.js";
</script>
```

#### 2. Import individual components (Recommended for better tree-shaking)

```html
<script type="module" src="./dist/components/counter.js"></script>
<script type="module" src="./dist/components/counterDisplay.js"></script>
```

Then use them in your HTML:

```html
<!-- Counter component with custom header -->
<counter-component buttonheader="My Counter"></counter-component>

<!-- Counter display component that shows the current count -->
<counterdisplay-component></counterdisplay-component>
```

### Framework Integration

#### React (or any other framework)

```jsx
// App.jsx
import "webcomponentsvelte5/dist/components/counter.js";
import "webcomponentsvelte5/dist/components/counterDisplay.js";

function App() {
  return (
    <div>
      <counter-component buttonheader="My Counter"></counter-component>
      <counterdisplay-component></counterdisplay-component>
    </div>
  );
}

export default App;
```

See a complete SvelteKit integration example here: [svete5import](https://github.com/dlaxcess/svete5import)

## Server-Side Rendering (SSR)

> ⚠️ Web Components are not compatible with Server-Side Rendering out of the box. Below are examples of how to properly integrate them in SSR frameworks.

### Next.js

```jsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Create a client-side only component
const Counter = dynamic(
  () => {
    import("webcomponentsvelte5/components/counter");
    return Promise.resolve(() => <counter-component buttonheader="My Counter" />);
  },
  { ssr: false }
);

const CounterDisplay = dynamic(
  () => {
    import("webcomponentsvelte5/components/counterDisplay");
    return Promise.resolve(() => <counterdisplay-component />);
  },
  { ssr: false }
);

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading placeholder
  }

  return (
    <div>
      <Counter />
      <CounterDisplay />
    </div>
  );
}
```

### SvelteKit

For a complete SvelteKit integration example, see: [svete5import](https://github.com/dlaxcess/svete5import)

Here's a basic wrapper component for SvelteKit:

```typescript
// lib/componentsWebComponentWrapper.svelte.d.ts
declare module "$lib/components/WebComponentWrapper.svelte" {
  import type { SvelteComponent } from "svelte";
  export default class WebComponentWrapper extends SvelteComponent<{
    // Add props here if needed
  }> {}
}
```

```svelte
<!-- lib/componentsWebComponentWrapper.svelte -->
<script lang="ts">
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  let mounted: boolean = false;

  onMount(async () => {
    if (browser) {
      await Promise.all([
        import("webcomponentsvelte5/components/counter"),
        import("webcomponentsvelte5/components/counterDisplay")
      ]);
      mounted = true;
    }
  });
</script>

{#if mounted}
  <slot />
{/if}

<!-- Usage in your pages -->
<script>
  import WebComponentWrapper from '$lib/components/WebComponentWrapper.svelte';
</script>

<WebComponentWrapper>
  <counter-component buttonheader="My Counter" />
  <counterdisplay-component />
</WebComponentWrapper>
```

## Events

The components communicate through custom events:

- `counter-update`: Emitted when the counter value changes
  ```javascript
  document.addEventListener("counter-update", (e) => {
    console.log("New count:", e.detail.count);
  });
  ```

## Development

```bash
# Install dependencies
pnpm install

# Build the library
pnpm run build

```

## License

MIT [dlaxcess](https://github.com/dlaxcess)
