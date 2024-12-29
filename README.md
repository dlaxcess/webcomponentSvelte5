# WebComponentSvelte5

A library of web components built with Svelte 5.

```bash
# Original install command for Svelte 5
pnpm create vite@latest
```

## Installation

```bash
pnpm install webcomponentsvelte5
```

## Usage

### In HTML

( Exemples in test.html & test-individual.html )

```html
<!-- Import the library -->
<script type="module">
  import { Counter, CounterDisplay } from "./dist/webcomponentsvelte5.es.js";
</script>

<!-- Or Import the components you need -->
<script type="module" src="./dist/components/counter.js"></script>
<script type="module" src="./dist/components/counter-display.js"></script>

<!-- Use them in your HTML -->
<counter-component buttonheader="My Counter"></counter-component>
<counter-display></counter-display>
```

### In React

```jsx
// App.jsx or any component file
import { Counter, CounterDisplay } from "webcomponentsvelte5";

function App() {
  return (
    <div>
      <counter-component buttonheader="My Counter"></counter-component>
      <counter-display></counter-display>
    </div>
  );
}

export default App;
```

## License

MIT dlaxcess
