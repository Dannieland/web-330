/*
Title: beverage.js
Date: 6/5/2023
Author: Danielle Taplin
Description: javascript for the beverage.js
*/

import { Product } from "./product.js";

export class Beverage extends Product
{
    constructor(name, price)
{
    super(name, price);
}
}