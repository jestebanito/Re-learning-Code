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

// Using true or false as values are called booleans. Other booleans can be "on" or "off", "1" or "0", an empty string "", or a non-empty string "non-empty string"
const trueObject = true;
const falseObject = false;

// Using the symbol || means 'or'. Using the symbol && means 'and'.
const trueOrFalseObject = true || false && true;

// Use substring() to extract portions of a string, like these examples below
let originalString = "Hello, World!";
let substring = originalString.substring(0, 5);
console.log(substring); // Output: "Hello"
console.log("Programming".substring(3, 7)); // Output: "gram"

// You can convert a string to uppercase or lowercase with toUpperCase() or toLowerCase() as provided below
let originalCase = "uppercase";
let toUpperCase = originalCase.toUpperCase();
console.log(toUpperCase); // Output: "UPPERCASE"
toUpperCase = toUpperCase.toLowerCase();
console.log(toUpperCase); // Output: "uppercase"

// Arrays are numerically indexed, collections of data where each item can be any data type, including other arrays and/or objects. Here's an example below.
// In JavaScript, you always count from 0
let hobbies = ['Animation', '3D Printing', ['Surfing', 'Snowboarding', 'Baseball']];
console.log(hobbies[0]); // Output: "Animation"
console.log(hobbies[0][0]); // Output: "A"
console.log(hobbies[2][0]); // Output: "Surfing"
console.log(hobbies[2][0][0]); // Output: "S"

// Objects are collections of key-value pairs, known as properties. Here is an example below
// Always end a property with a comma before writing the next property, other wise it will output an error
let player1 = {
    name: 'Player 1',
    age: 26,
    height: "5'9",
    weight: "180lbs"
};

