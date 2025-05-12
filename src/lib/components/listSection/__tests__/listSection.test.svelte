<script>
  import "../index";
</script>

<pc-list-section data-testid="list-section" vertical-count="3" horizontal-count="2">
  <div slot="header" data-testid="list-section-header">
    <h3>List Section Title</h3>
    <div>
      <button data-testid="prev-button" aria-label="Previous items" type="button">
        <span class="icon icon-left" aria-hidden="true"></span>
      </button>
      <button data-testid="next-button" aria-label="Next items" type="button">
        <span class="icon icon-right" aria-hidden="true"></span>
      </button>
    </div>
  </div>
  
  <div slot="items" data-testid="list-section-items">
    <ul>
      <li data-testid="list-item-1">
        <a href="#item1">
          <img src="product1.jpg" alt="Product 1">
          <span>Product 1</span>
        </a>
      </li>
      <li data-testid="list-item-2">
        <a href="#item2">
          <img src="product2.jpg" alt="Product 2">
          <span>Product 2</span>
        </a>
      </li>
      <li data-testid="list-item-3">
        <a href="#item3">
          <img src="product3.jpg" alt="Product 3">
          <span>Product 3</span>
        </a>
      </li>
      <li data-testid="list-item-4">
        <a href="#item4">
          <img src="product4.jpg" alt="Product 4">
          <span>Product 4</span>
        </a>
      </li>
      <li data-testid="list-item-5">
        <a href="#item5">
          <img src="product5.jpg" alt="Product 5">
          <span>Product 5</span>
        </a>
      </li>
    </ul>
  </div>
  
  <button slot="show-more" type="button" data-testid="show-more-button">
    Show more
    <span class="icon icon-down" aria-hidden="true"></span>
  </button>
  
  <button slot="show-less" type="button" data-testid="show-less-button">
    Show less
    <span class="icon icon-up" aria-hidden="true"></span>
  </button>
</pc-list-section>
