/*
Title: dessert.js
Date: 6/5/2023
Author: Danielle Taplin
Description: javascript for the dessert.js
*/

import { Product } from "./product.js";

export class Dessert extends Product
{
    constructor(name, price)
{
    super(name, price);
}
}