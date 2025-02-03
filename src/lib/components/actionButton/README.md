# Action Button Web Component

A custom web component to handle actions like copying to clipboard and sharing via the Web Share API.

## Installation

```html
<script type="module">
  import "webcomponentsvelte5/components/actionButton";
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
  <div slot="button" class="custom-share-button">
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

## Slots

The component provides a slot to customize its appearance:

- `button`: Allows complete customization of the action button

```html
<!-- Example with a custom button -->
<action-button action="copy" entry="Text">
  <div slot="button" class="custom-button">
    <i class="icon-copy"></i>
    <span>Copy to clipboard</span>
  </div>
</action-button>
```

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
  console.log(`Action ${type}: ${message}`);
});
```

## CSS Customization

The component can be customized via CSS:

```css
action-button {
  --action-button-display: block; /* Controls actionButton Webcomponent display */
}
```

## Notes

- The "share" action uses the Web Share API and will only work on browsers that support it
- The "copy" action uses the Clipboard API and requires appropriate permissions
- The component automatically handles errors and emits appropriate events
- The `button` slot is mandatory for the component to be functional
