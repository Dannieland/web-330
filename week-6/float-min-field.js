/*
float-min-field.js
Danielle Taplin
6/29/2023
JavaScript document for future value app
*/

//declare and export a float max field class
export class FloatMinField{
    //declare a constructor to initialize a name and field for object
    constructor(name, field, min){
        this.name = name;
        this.field = field;
        this.min = min;
    }

    //declare validation function
    validate(){
        //if object field is greater than min value:
        if(parseFloat(this.field) > this.min){
            //if return true
            return true;
        } else {
            //if return false
            return false;
        }
    }

    //declare function to get a message
    getMessage(){
        //return a string message stating field value must be greater than the min value
        return this.name + " must be greater than " + this.min + ". You entered " + this.field;
    }
}