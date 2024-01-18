// Always use strict for JavaScript
'use strict'; 

// Always add semicolons to the end of a statement to indicate that it is finished
// let variables can be dynamic, const variables are permanent 
const myBirthYear = "1997";
let myName = "Joshua Esteban";
// Changed the let variable
myName = "Josh";

// Console logging is important to check for errors
// How to console log a variable
console.log(myName);
// Example of concatenating a string with a variable
console.log("Hello Again, " + myName);

// After declaring a let variable, don't redeclare it. If you want to change the output, just write the variable itself 
let myAge = 99; 
// Example of concatenating a variable with a number
myAge = myAge + 1;

// Use typeof to check the type of a variable. In this case, the type is a number
console.log(typeof myAge);

// Using uppercase constants are only for universal truths, such as these ones
const METERS_TO_FEET = 3.281;
const SECONDS_PER_DAY = 60*60*24;

// The use of null is for the intentional absence of a value
const emptyObject = null;

// Using true or false as values are called booleans
const trueObject = true;
const falseObject = false;

// Using the symbol || means 'or'. Using the symbol && means 'and'.
const trueOrFalseObject = true || false && true;

