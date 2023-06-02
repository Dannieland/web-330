/*Title: taplin-palindrome.js
Author: Danielle Taplin
Date: 6/1/23
Description: JavaScript for palindrome app
*/


function getTodaysDate(){ //declare function for obtaining the current date
    const date = new Date().toLocaleDateString('en-US'); //declare variable containing current date
    return date;  //return the date
}

function getLength(str){ //declare a function for getting the length of a string
    return str.length; //return the length of provided parameter
}

function reverse(str){ //declare a function to reverse the string
    let string = str.split(""); //split the parameter string into an array
    string = string.reverse(); //reverse the string
    string = string.join(""); //join the string back together

    return string; //return the reversed string
}

function isPalindrome(str){ //declare function to determine if the parameter (str) is a palindrome
    let palindrome = false; //declare variable a palindrome containing the boolean value false


    if (reverse(str) == str){ //if (str) in reverse is equal to (str)
        palindrome = true; //set palindrome to true
    }

    return palindrome; //return true/false value of the palindrome
}

document.getElementById("btnCheckPhrase").onclick = function() { //configure onclick event to check if input phrase is a palindrome
    let txtPhrase = document.getElementById('txtPhrase').value.toLowerCase(); //declare variable to hold the text input from the HTML file

    let assignResultsHeader = document.getElementById('assign-results-header'); //declaring variable to hold the results header
    let assignResults = document.getElementById('assign-results'); //declaring variable to hold the assigned results

    let today = getTodaysDate(); //declare variable to hold todays date
    let len = getLength(txtPhrase); //declare variable to hold the length of the phrase
    let reversePhrase = reverse(txtPhrase); //declare variable of the reversed phrase

    let header = "Date: " + today + `<br/>`+ "Original Phrase: " + txtPhrase + `<br/>`+ "Reversed Phrase: " //declare variable to hold html header display the date and info about the phrase
        + reversePhrase + `<br/>`+ "Phase Length: " + len;

    assignResultsHeader.innerHTML = header; //set the innerHTML of assignment results header to display header variable above

    if (isPalindrome(txtPhrase)){ //if txtPhrase IS a palindrome
        assignResults.innerHTML = txtPhrase + ` <b><u>is</u></b>` + " a palindrome!"; //display string in HTML stating phrase is a palindrome
    } else { //if ELSE
        assignResults.innerHTML = txtPhrase + ` <b><u>is not</u></b>` + " a palindrome!"; //display string in HTML stating phrase is not a palindrome
    }
}