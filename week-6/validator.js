/*
validator.js
Danielle Taplin
6/29/2023
JavaScript document for future value app
*/

//import field objects from other JavaScript files
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMaxField } from "./float-max-field.js";
import { FloatMinField } from "./float-min-field.js"

//declare validator class
export class Validator{
    //declare validators and messages as empty arrays
    validators = [];
    messages = [];
    //declare constructor to initialize name and field variables
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
    //declare function to add required field
    addRequiredField(){
        //push new field onto validators array
        this.validators.push(new RequiredField(this.name, this.field));
    }
    //declare a function to add a float field
    addRequiredFloatField(){
        //push new field onto the validators array
        this.validators.push(new FloatField(this.name, this.field))
    }
    //declare function to add a float max field
    addFloatMaxField(max){
        //push new field onto validators array
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
    //declare function to add a float min field
    addFloatMinField(min){
        //push a new field onto the validators array
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    //declare validation function
    validate(){
        //for each member of validators array
        for(let input of this.validators){
            //if the current member's validate function returns false
            if(!input.validate()){
                //push current inputs message onto array
                this.messages.push(input.getMessage());

                //return false
                return false;
            }
        }
        
        //return true once every single member of "validators" is successfully validated
        return true;
    }

}