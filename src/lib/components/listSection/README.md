# ListSection Web Component

A responsive web component that automatically switches between two display modes based on screen size:
- **Desktop mode** (large screen): displays a horizontal slider using the `pc-slider` component
- **Mobile mode** (narrow screen): displays a vertical list using the `pc-show-more` component

## Installation

```html
<script type="module">
  import "webcomponentSvelte5/components/listSection";
</script>
```

## Usage

```html
<!-- ListSection component with all necessary slots -->
<pc-list-section vertical-count="3" horizontal-count="4">
  <h3 slot="header">Recommended Products</h3>

  <div slot="items">
    <ul>
      <li>
        <a href="#item1">
          <img src="product1.jpg" alt="Product 1">
          <span>Product 1</span>
        </a>
      </li>
      <li>
        <a href="#item2">
          <img src="product2.jpg" alt="Product 2">
          <span>Product 2</span>
        </a>
      </li>
      <!-- More items... -->
    </ul>
  </div>

  <button slot="show-more" type="button">
    Show more
    <span class="icon icon-down" aria-hidden="true"></span>
  </button>

  <button slot="show-less" type="button">
    Show less
    <span class="icon icon-up" aria-hidden="true"></span>
  </button>
</pc-list-section>
```

## Props

| Prop            | Type   | Description                                          | Default |
| --------------- | ------ | ---------------------------------------------------- | ------- |
| verticalCount   | number | Number of items to display in mobile mode (show-more) | 2       |
| horizontalCount | number | Number of items to scroll in desktop mode (slider)   | 2       |

## Customization

The component can be customized via CSS properties:

```css
pc-list-section {
  --_breakpoint: 768px; /* Breakpoint to switch between modes */
}
```

### Slots

The component provides four slots to define its content:

| Slot        | Description                                        | Required | Display Mode |
| ----------- | -------------------------------------------------- | -------- | ------------ |
| `header`    | Section header                                     | Yes      | Both         |
| `items`     | List content (should contain a `<ul>` element)     | Yes      | Both         |
| `show-more` | Button to show more items                          | Yes      | Mobile only  |
| `show-less` | Button to show fewer items                         | Yes      | Mobile only  |

## Responsive Behavior

- Below the breakpoint (default: 480px): uses the `pc-show-more` component which displays a vertical list with a "Show more" button
- Above the breakpoint: uses the `pc-slider` component which displays a horizontal carousel with navigation buttons
- The switching is automatic and occurs when the screen width changes
- Each mode maintains its own accessibility and navigation behaviors

## Accessibility

The component inherits accessibility features from its child components:

- In mobile mode (`pc-show-more`):
  - Focus management when expanding/collapsing the list
  - Keyboard navigation support
  - Appropriate ARIA attributes

- In desktop mode (`pc-slider`):
  - Keyboard navigation between items
  - ARIA attributes for the carousel
  - Announces changes with `aria-live="polite"`

## Notes

- All slots are passed to the appropriate child components
- The `header` slot is used in both modes
- The `show-more` and `show-less` slots are only used in mobile mode
- The component automatically handles switching between the two display modes
- For optimal functionality, make sure to provide all required slots
