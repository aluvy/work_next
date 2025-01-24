class HeaderComponent extends HTMLElement {
  connectedCallback() {

    this.innerHTML = `
      <header id="header">
        <div class="inner">
          <h1><a href="index.html"><span class="blind">NEXT</span></a></h1>
          <div class="utils">
            <button type="button" id="aside_button"></button>
          </div>
        </div>
      </header>

      <div id="aside">
        <nav class="aside-nav">
          <div class="inner">
            <ul>
              <li><a href="#" data-slide="1">Mission & Vision</a></li>
              <li><a href="#" data-slide="2">What we do</a></li>
              <li><a href="#" data-slide="3">Members</a></li>
              <li><a href="#" data-slide="4">Partners</a></li>
              <li><a href="#" data-slide="5">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div class="aside-copy">
          <div class="inner">
            © 2025 IP LAWFIRM NEXT. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('header-component', HeaderComponent);