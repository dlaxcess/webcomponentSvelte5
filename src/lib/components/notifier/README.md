# Notifier Web Component

A custom web component for displaying notifications and alert messages with automatic display duration management.

## Installation

```html
<script type="module">
  import 'webcomponentsvelte5/components/notifier';
</script>
```

## Usage

```html
<!-- Add the component to your page -->
<notifier-component></notifier-component>

<!-- With a custom close button -->
<notifier-component>
  <span slot="closeButtonContent">✖️</span>
</notifier-component>

<!-- Trigger a notification -->
<script>
  const event = new CustomEvent('notify', {
    detail: {
      message: 'Your message here',
      type: 'success',
      duration: 3000
    }
  });
  document.dispatchEvent(event);
</script>
```

## Notification Types

The component supports two types of notifications:
- `success`: For success messages (green)
- `error`: For error messages (red, with appropriate ARIA attributes)

## Configuration

### Notify Event

The `notify` event accepts the following properties in its `detail`:

```typescript
interface NotifierEventDetail {
  message: string;           // The message to display
  type?: 'success' | 'error'; // Type of notification (default: 'success')
  duration?: number;         // Display duration in ms (0 for manual)
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
  --notifier-transition-duration: 0.5s;  /* Transition duration */
  --notifier-fsize: 1.2rem;             /* Font size */
  --bg-color: #fff;                     /* Background color */
  --header-spacing: 5rem;               /* Top spacing */
  --focus-outline: revert;              /* Focus style */
  --zindex-notification: 10000;         /* Notification z-index */
}
```

## Accessibility

- Uses the native `<dialog>` element for better accessibility
- Appropriate ARIA attributes for error messages
- Focus management when integrated into other components
- Support for closing by clicking outside

## Element-Specific Notifications

The notifier can display notifications relative to specific HTML elements. Instead of dispatching the event globally to the document, you can dispatch it from any HTML element to show the notification just above that element:

```html
<div id="myElement">Some content</div>

<script>
  const element = document.getElementById('myElement');
  const event = new CustomEvent('notify', {
    detail: {
      message: 'This notification will appear above the element',
      type: 'success',
      duration: 3000
    }
  });
  element.dispatchEvent(event);
</script>
```

This is particularly useful when you want to show context-specific notifications near the relevant UI elements, such as form validation messages or action confirmations.
