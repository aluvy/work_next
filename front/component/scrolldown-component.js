class ScrolldownComponent extends HTMLElement {
  connectedCallback() {

    this.innerHTML = `
      <div class="scrolldown">
        <button type="button" id="scrolldown_button"></button>
      </div>
    `;
  }
}
customElements.define('scrolldown-component', ScrolldownComponent);