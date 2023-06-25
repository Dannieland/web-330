/*
shopping-cart.js
Danielle Taplin
6/21/2023
JavaScript document for bobs auto repair shop
*/

/* export ShoppingCart class with constructor that creates a property for products and assigns it to empty array */
export class ShoppingCart {
	constructor() {
		this.products = [];
	}

	// class method counting the length of the products array
	count() {
		return this.products.length;
	}

	// class method adding new products to products array
	add(product) {
		this.products.push(product);
	}

	// generator yielding product objects through iteration
	*iterate() {
		for (const product of this.products) {
			yield product;
		}
	}
}