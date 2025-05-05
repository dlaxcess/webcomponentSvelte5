# Slider Web Component

A custom web component that creates a horizontal slider/carousel with smooth scrolling and keyboard navigation capabilities.

## Installation

```html
<script type="module">
  import "webcomponentSvelte5/components/slider";
</script>
```

## Usage

```html
<!-- Basic slider with navigation buttons -->
<pc-slider horizontal-count="3">
  <div slot="header">
    <h3>Featured Products</h3>
    <div>
      <button type="button" aria-label="Previous items">
        <span class="icon icon-left" aria-hidden="true"></span>
      </button>
      <button type="button" aria-label="Next items">
        <span class="icon icon-right" aria-hidden="true"></span>
      </button>
    </div>
  </div>

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
      <li>
        <a href="#item3">
          <img src="product3.jpg" alt="Product 3">
          <span>Product 3</span>
        </a>
      </li>
      <li>
        <a href="#item4">
          <img src="product4.jpg" alt="Product 4">
          <span>Product 4</span>
        </a>
      </li>
      <li>
        <a href="#item5">
          <img src="product5.jpg" alt="Product 5">
          <span>Product 5</span>
        </a>
      </li>
    </ul>
  </div>
</pc-slider>
```

## Props

| Prop            | Type   | Description                                      | Default |
| --------------- | ------ | ------------------------------------------------ | ------- |
| horizontalCount | number | Number of items to scroll at once                | 2       |

## Customization

The component provides CSS custom properties for styling:

```css
pc-slider {
  --pc-carousel-container-overflowx: scroll; /* Controls overflow behavior */
  --pc-scroll-padding-left: 20px; /* Controls left padding for scrolling */
}
```

### Slots

The component provides two slots to define its content:

| Slot     | Description                                                   | Required |
| -------- | ------------------------------------------------------------- | -------- |
| `header` | Contains the title and navigation buttons (prev/next buttons) | Yes      |
| `items`  | The list content (should contain a `<ul>` element with `<li>` items) | Yes      |

## Accessibility

The Slider component is built with accessibility in mind:

- Uses proper ARIA attributes (`aria-roledescription`, `aria-controls`, `aria-live`)
- Supports keyboard navigation (Left/Right arrow keys navigate between items)
- Focus management is handled appropriately when navigating
- Announces changes with `aria-live="polite"`
- Provides appropriate ARIA roles for carousel and slides

## Behavior

- Displays items horizontally with smooth scrolling
- Navigation buttons scroll by the number of items specified in `horizontalCount`
- Automatically adjusts the number of items to scroll based on container width
- Supports keyboard navigation with arrow keys
- Implements scroll snap for better user experience
- Handles resize events to maintain proper layout
- Manages focus appropriately when navigating between items

## Notes

- The `header` slot should contain navigation buttons (previous and next)
- The `items` slot should contain a `<ul>` element with `<li>` children
- Each item should contain a focusable element (like a link or button)
- The component automatically handles scroll behavior and keyboard navigation
- Responsive design is supported through automatic adjustment of visible items
