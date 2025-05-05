# ShowMore Web Component

A custom web component that creates an expandable list with "show more" and "show less" functionality, providing a clean way to display long lists with progressive disclosure.

## Installation

```html
<script type="module">
  import "webcomponentSvelte5/components/showMore";
</script>
```

## Usage

```html
<!-- Basic show more/less component -->
<pc-show-more vertical-count="3">
  <h3 slot="header">Featured Items</h3>

  <div slot="items">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
      <li>Item 6</li>
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
</pc-show-more>
```

## Props

| Prop          | Type   | Description                                     | Default |
| ------------- | ------ | ----------------------------------------------- | ------- |
| verticalCount | number | Number of items to show initially before hiding | 2       |

## Customization

The component doesn't provide specific CSS custom properties, but you can style it using regular CSS.

### Slots

The component provides four slots to define its content:

| Slot        | Description                                        | Required |
| ----------- | -------------------------------------------------- | -------- |
| `header`    | Optional header content above the list             | No       |
| `items`     | The list content (should contain a `<ul>` element) | Yes      |
| `show-more` | Button to show more items                          | Yes      |
| `show-less` | Button to show fewer items                         | Yes      |

## Accessibility

The ShowMore component is built with accessibility in mind:

- Uses proper ARIA attributes (`aria-expanded`, `aria-controls`, `aria-live`)
- Supports keyboard navigation (Escape key collapses the expanded list)
- Focus management is handled appropriately when expanding/collapsing
- List announces changes with `aria-live="polite"`

## Behavior

- Initially shows only the number of items specified by `verticalCount` (default: 2)
- Clicking "Show more" displays all items and focuses the first newly visible item
- Clicking "Show less" hides items beyond the `verticalCount` and focuses the "Show more" button
- Pressing Escape when expanded will collapse the list and return focus to the "Show more" button
- The component handles all necessary ARIA attributes automatically

## Notes

- The `items` slot should contain a `<ul>` element with `<li>` children
- Both the `show-more` and `show-less` buttons are required for the component to function properly
- The component automatically manages the visibility of the buttons based on the current state
- Keyboard navigation is fully supported for accessibility
