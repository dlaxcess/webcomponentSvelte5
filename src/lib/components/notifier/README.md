# Notifier Web Component

A custom web component for displaying notifications and alert messages with automatic display duration management.

## Installation

```html
<script type="module">
  import "webcomponentSvelte5/components/notifier";
</script>
```

## Usage

Add the component as first child of your `<body></body>`

```html
<!-- Add the component to your page -->
<notifier-component></notifier-component>

<!-- With a custom close button -->
<notifier-component>
  <button slot="button" type="button" class="btn" aria-label="Share with my applications">
    <i class="icon icon-share"></i>
  </button>
</notifier-component>
```

## Props

This component has no props

## Events

You can display a notification from everywhere in your project using custom event

### Page notification

You can display a notification on top of your page (global notification):

```javascript
// Trigger a notification
const event = new CustomEvent("notify", {
  detail: {
    message: "Your message here",
    type: "success",
    duration: 3000,
  },
});
document.dispatchEvent(event);
```

### Element-Specific Notifications

The notifier can display notifications relative to specific HTML elements (or open shadowRoot webcomponents).  
Instead of dispatching the event globally to the document, you can dispatch it from any HTML element to show the notification just above it:

```html
<div id="myElement">Some content</div>

<script>
  const element = document.getElementById("myElement");
  const event = new CustomEvent("notify", {
    detail: {
      message: "This notification will appear above the element",
      type: "success",
      duration: 3000,
    },
  });
  element.dispatchEvent(event);
</script>
```

This is particularly useful when you want to show context-specific notifications near the relevant UI elements, such as form validation messages or action confirmations.

### Notification Types

The component supports four types of notifications:

- `success`: For success messages (green)
- `error`: For error messages (red, with appropriate ARIA attributes)
- `info` : Not used
- `warning` : Not used

### Notify Event

The `notify` event accepts the following properties in its `detail`:

```typescript
interface NotifierEventDetail {
  message: string; // The message to display
  type?: "success" | "error" | "info" | "warning"; // Type of notification (default: 'success')
  duration?: number; // Display duration in ms (default: 500) (0 for manual)
}
```

### Display Duration

- If `duration > 0`: The notification will automatically close after the specified duration
- If `duration = 0`: The notification will remain displayed until the user closes it

## Customization

### Slots

The component provides a named slot to customize its appearance:

- `closeButtonContent`: Allows customization of the close button content (only visible when `duration = 0`)

```html
<!-- Example with an emoji as close button -->
<notifier-component>
  <span slot="closeButtonContent">🔴</span>
</notifier-component>
```

### CSS Variables

The component uses several CSS variables for customization:

```css
notifier-component {
  --notifier-transition-duration: 0.5s; /* Transition duration */
  --notifier-fsize: 1.2rem; /* Font size */
  --bg-color: #fff; /* Background color */
  --header-spacing: 5rem; /* Top spacing */
  --focus-outline: revert; /* Focus style */
  --zindex-notification: 10000; /* Notification z-index */
}
```

## Notes

- Uses the native `<dialog>` element for better accessibility
- Appropriate ARIA attributes for error messages
- Focus management when integrated into other components
- Support for closing by Escape key or clicking outside
