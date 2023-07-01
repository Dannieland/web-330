/*
float-max-field.js
Danielle Taplin
6/29/2023
JavaScript document for future value app
*/

//declare and export a float max field class
export class FloatMaxField{
    //declare constructor to initialize a name and a field for the object
    constructor(name, field, max){
        this.name = name;
        this.field = field;
        this.max = max;
    }

    //declare a validation function
    validate(){
        //if object field is less than the max value:
        if(parseFloat(this.field) < this.max){
            //return true
            return true;
        } else {
            //return false
            return false;
        }
    }

    //declare function to get a message
    getMessage(){
    //return a string message stating field value MUST be less than the maximum
        return this.name + " must be less than " + this.max + ". You entered " + this.field;
    }
}