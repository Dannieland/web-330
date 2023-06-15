/*
Title: food-model.js
Date: 6/9/2023
Author: Danielle Taplin
Description: javascript code for food models
*/

// exported FoodModel class with constructor that creates and initialized food item object
export class FoodModel {
	constructor(id, name, calories) {
		this.id = id;
		this.name = name;
		this.calories = calories;
	}
}