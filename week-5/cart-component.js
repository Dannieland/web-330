/*
cart-component.js
Danielle Taplin
6/21/2023
JavaScript document for bobs auto repair shop
*/
/*cart component javascript*/
class CartComponent extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
		<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
		`;
	}
}
customElements.define("cart-component", CartComponent);