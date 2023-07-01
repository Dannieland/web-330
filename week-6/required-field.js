/*
required-field.js
Danielle Taplin
6/29/2023
JavaScript document for future value app
*/

//declare and export required field class
export class RequiredField{
    //declare a constructor to initialize the object's name and field
    constructor(name, field){
        this.name = name;
        this.field = field;
    }

    //declare a validation function
    validate(){
        //if object's field is a string:
        if (typeof this.field === 'string'){
            //return true
            return true;
        } else {
            //otherwise, return false
            return false;
        }
    }


    //declare a function to get message
    getMessage(){
        //return message about a required field
        return this.name + " is a required field";
    }
}