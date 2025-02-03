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
  import 'webcomponentsvelte5';
</script>
```

Or import components individually as needed:

```html
<script type="module">
  import 'webcomponentsvelte5/components/actionButton';
  import 'webcomponentsvelte5/components/notifier';
  // Import other components as needed
</script>
```

### CommonJS

You can import the complete bundle in Node.js environments:

```javascript
require('webcomponentsvelte5');
```

### Usage in HTML

```html
<!-- Use components in your HTML -->
<action-button action="copy" entry="Text to copy">
  <button slot="button">Copy</button>
</action-button>

<notifier-component></notifier-component>
```

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
