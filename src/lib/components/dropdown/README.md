# Dropdown Web Component

A custom web component that creates an accessible dropdown/accordion interface with expandable content.

## Installation

```html
<script type="module">
  import "webcomponentSvelte5/components/dropdown";
</script>
```

## Usage

```html
<!-- Basic dropdown -->
<pc-dropdown>
  <h3 slot="heading">Expandable section</h3>
  <div slot="content">
    <p>This content will be shown/hidden when clicking the heading.</p>
  </div>
</pc-dropdown>

<!-- Dropdown with rich content -->
<pc-dropdown>
  <p slot="heading">
    Click to expand
    <span class="icon icon-down" aria-hidden="true"></span>
  </p>
  <ul slot="content">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</pc-dropdown>
```

## Props

This component has no props.

## Customization

The component doesn't provide specific CSS custom properties, but you can style it using regular CSS.

### Slots

The component provides two slots to define its content:

| Slot      | Description                                                | Required |
| --------- | ---------------------------------------------------------- | -------- |
| `heading` | The clickable heading that toggles the dropdown visibility | Yes      |
| `content` | The content that will be shown/hidden                      | Yes      |

## Accessibility

The dropdown component is built with accessibility in mind:

- Uses proper ARIA attributes (`aria-expanded`, `aria-controls`, `aria-labelledby`)
- Supports keyboard navigation (Escape key closes the dropdown)
- Content is properly hidden when collapsed
- Focus management is handled appropriately

## Behavior

- Clicking the heading toggles the visibility of the content
- The heading is automatically converted to a button element for proper accessibility
- Pressing Escape when the dropdown is open will close it and return focus to the heading
- The component handles all necessary ARIA attributes automatically

## Notes

- Both the `heading` and `content` slots are required for the component to function properly
- The component automatically handles the conversion of the heading to a button element
- The dropdown state is managed internally by the component
