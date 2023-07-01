/*
finance-calculator.js
Danielle Taplin
6/29/2023
JavaScript document for future value app
*/

//declare and export a float max field class
export class FinanceCalculator{
    //declare static property for number of months in the year
    static MONTHS_IN_YEAR = 12;
    //declare a static function for calculating future values
    static calculateFutureValue(monthlyPayment, rate, years){
        //calculate variables for month, interest rate, present value, and future value using the parameters
        let month = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * month;
        let futureValue = presentValue * (Math.pow(interestRate, month));
        //return the future value variable at two decimal places
        return futureValue.toFixed(2);
    }
    //declare static function for converting currency
    static convertToCurrency(field){
        //declare a variable to format currency to USD
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        //return the currency format
        return currencyFormatter.format(field);
    }
}