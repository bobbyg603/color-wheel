class ColorWheel extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'style.css');

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
    wrapper.innerHTML = 'hello world!';

    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
  }
}

customElements.define('color-wheel', ColorWheel);