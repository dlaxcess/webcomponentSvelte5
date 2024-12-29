# Webcomponent-lib

A library of web components built with Svelte 5.

```bash
# Original install command for Svelte 5
pnpm create vite@latest
```

## Installation

```bash
pnpm install webcomponent-lib
```

## Usage

```html
<!-- Import the library -->
<script type="module">
  import { Counter, CounterDisplay } from "./dist/web-component-lib.es.js";
</script>

<!-- Or Import the components you need -->
<script type="module" src="./dist/components/counter.js"></script>
<script type="module" src="./dist/components/counter-display.js"></script>

<!-- Use them in your HTML -->
<counter-component></counter-component>
<counter-display></counter-display>
```

### React Usage

```jsx
// App.jsx or any component file
import { Counter, CounterDisplay } from "webcomponent-lib";

function App() {
  return (
    <div>
      <counter-component buttonheader="React Counter"></counter-component>
      <counter-display></counter-display>
    </div>
  );
}

export default App;
```

## License

MIT dlaxcess
