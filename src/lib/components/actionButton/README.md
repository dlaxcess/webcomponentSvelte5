# Action Button Web Component

A custom web component to handle actions like copying to clipboard and sharing via the Web Share API.

## Installation

```html
<script type="module">
  import "webcomponentSvelte5/components/actionButton";
</script>
```

## Usage

```html
<!-- Simple copy button -->
<action-button action="copy" entry="Text to copy">
  <button slot="button">Copy</button>
</action-button>

<!-- Custom share button -->
<action-button action="share" entry="https://example.com" title="Share title" text="Share description">
  <div slot="button" role="button" tabindex="0" class="custom-share-button">
    <img src="share-icon.svg" alt="Share" />
    <span>Share</span>
  </div>
</action-button>
```

## Props

| Prop   | Type              | Description                                | Required |
| ------ | ----------------- | ------------------------------------------ | -------- |
| action | 'copy' \| 'share' | Type of action to perform                  | Yes      |
| entry  | string            | Content to copy or URL to share            | Yes      |
| title  | string            | Title for sharing (only for 'share')       | No       |
| text   | string            | Description for sharing (only for 'share') | No       |

## Events

The component emits a custom event `actionButtonEmit` with the following details:

```typescript
interface ActionButtonEventDetail {
  type: "success" | "error";
  message: string;
}
```

### Event Listening Example

```javascript
document.addEventListener("actionButtonEmit", (event) => {
  const { type, message } = event.detail;
  console.log(`${type}: ${message}`);
});
```

## Customization

### Slots

The component provides a slot to customize its appearance:

- `button` (mandatory): Allows complete customization of the action button

```html
<!-- Example with a custom button -->
<action-button action="copy" entry="Text">
  <button slot="button" class="custom-button">
    <i class="icon-copy"></i>
  </button>
</action-button>
```

### CSS

The component can be customized via CSS:

```css
action-button {
  --action-button-display: block; /* Controls actionButton webcomponent display */
}
```

## Notes

- The "share" action uses the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API) and will only work on browsers that support it
- The "copy" action uses the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard) and requires appropriate permissions
- The component automatically handles errors and emits appropriate events
- The `button` slot is mandatory for the component to be functional
