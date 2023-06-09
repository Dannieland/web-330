/*
Title: bill.js
Date: 6/5/2023
Author: Danielle Taplin
Description: javascript for the bill.js
*/

// Exported class with constructor that created object and assigns them to empty arrays
export class Bill {
	constructor(_beverages, _appetizers, _mainCourses, _desserts) {
		this._beverages = [];
		this._appetizers = [];
		this._mainCourses = [];
		this._desserts = [];
	}

	// functions pushing food and beverage objects to arrays
	addBeverage(beverage) {
		this._beverages.push(beverage);
	}

	addAppetizer(appetizer) {
		this._appetizers.push(appetizer);
	}

	addMainCourse(mainCourse) {
		this._mainCourses.push(mainCourse);
	}

	addDessert(dessert) {
		this._desserts.push(dessert);
	}

	// Function calculating order total
	getTotal() {
		// Variable to hold the total value
		let total = 0;

		// Iterating over food and beverages arrays and calculating array item total value and adding it to total variable
		let beverageTotal = this._beverages.forEach(function (beverage) {
			total += parseFloat(beverage.price);
		});

		let appetizerTotal = this._appetizers.forEach(function (appetizer) {
			total += parseFloat(appetizer.price);
		});

		let mainCourseTotal = this._mainCourses.forEach(function (mainCourse) {
			total += parseFloat(mainCourse.price);
		});

		let dessertTotal = this._desserts.forEach(function (dessert) {
			total += parseFloat(dessert.price);
		});

		return total.toFixed(2);
	}
}