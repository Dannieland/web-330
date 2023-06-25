/*
product.js
Danielle Taplin
6/21/2023
JavaScript document for bobs auto repair shop
*/

// export Product class with constructor that creates and initialized Product objects
export class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
		this.id = Math.random().toString(16).slice(2);
	}
}