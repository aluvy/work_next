class SlickpagingComponent extends HTMLElement {
  connectedCallback() {

    this.innerHTML = `
      <div class="slide-pagination-area">
        <button type="button" class="slide-arrow slide-prev"></button>
        <div class="slide-pagination">
          <span class="current">0</span>
          <span class="total">0</span>
        </div>
        <button type="button" class="slide-arrow slide-next"></button>
      </div>
    `;
  }
}
customElements.define('slickpaging-component', SlickpagingComponent);