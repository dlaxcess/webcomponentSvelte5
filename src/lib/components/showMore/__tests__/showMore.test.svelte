<script>
  import "../index";
</script>

<pc-show-more data-testid="show-more" vertical-count="3">
  <h3 slot="header" data-testid="show-more-header">Show More Title</h3>
  
  <div slot="items" data-testid="show-more-items">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
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
</pc-show-more>
