/*
Title: main-course.js
Date: 6/5/2023
Author: Danielle Taplin
Description: javascript for the main-course.js
*/

import { Product } from "./product.js";

export class MainCourse extends Product
{
    constructor(name, price)
{
    super(name, price);
}
}