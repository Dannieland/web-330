/*
Title: appetizer.js
Date: 6/5/2023
Author: Danielle Taplin
Description: javascript for the appetizer.js
*/

import { Product } from "./product.js";

export class Appetizer extends Product
{
    constructor(name, price)
{
    super(name, price);
}
}