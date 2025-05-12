<script>
  import "../index";
</script>

<pc-slider data-testid="slider" horizontal-count="2">
  <div slot="header" data-testid="slider-header">
    <h3>Slider Title</h3>
    <div>
      <button type="button" aria-label="Previous items" data-testid="prev-button">
        <span class="icon icon-left" aria-hidden="true"></span>
      </button>
      <button type="button" aria-label="Next items" data-testid="next-button">
        <span class="icon icon-right" aria-hidden="true"></span>
      </button>
    </div>
  </div>
  
  <div slot="items" data-testid="slider-items">
    <ul>
      <li data-testid="slider-item-1">
        <a href="#item1">
          <img src="product1.jpg" alt="Product 1">
          <span>Product 1</span>
        </a>
      </li>
      <li data-testid="slider-item-2">
        <a href="#item2">
          <img src="product2.jpg" alt="Product 2">
          <span>Product 2</span>
        </a>
      </li>
      <li data-testid="slider-item-3">
        <a href="#item3">
          <img src="product3.jpg" alt="Product 3">
          <span>Product 3</span>
        </a>
      </li>
      <li data-testid="slider-item-4">
        <a href="#item4">
          <img src="product4.jpg" alt="Product 4">
          <span>Product 4</span>
        </a>
      </li>
      <li data-testid="slider-item-5">
        <a href="#item5">
          <img src="product5.jpg" alt="Product 5">
          <span>Product 5</span>
        </a>
      </li>
    </ul>
  </div>
</pc-slider>
