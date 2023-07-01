/*
float-field.js
Danielle Taplin
6/29/2023
JavaScript document for future value app
*/

//declare and export float field class
export class FloatField{
    //declare constructor to initialize a name and field for the object
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
    //declare validation function
    validate(){
        //if the objects field value is a number
        if(!isNaN(this.field)){
            //return true
            return true;
        } else {
            //else return false
            return false;
        }
    }

    //declare function to get a message
    getMessage(){
        //return string message stating field value must be a float value
        return this.name + " must be a float value. You entered " + this.field;
    }
}