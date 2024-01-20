// Always, always use strict for JavaScript.
'use strict'; 

        // VARIABLES************

// Always add semicolons to the end of a statement to indicate that it is finished.
// let variables can be dynamic, const variables are permanent.
const myBirthYear = "1997";
let myName = "Joshua Esteban";
// Changed the let variable
myName = "Josh";

        // CONSOLE.LOG************ 

// Console logging is important to check for errors.
// How to console log a variable
console.log(myName);
// Example of concatenating a string with a variable
console.log("Hello Again, " + myName);

        // LET VARIABLES************

// After declaring a let variable, don't redeclare it. If you want to change the output, just write the variable itself.
let myAge = 99; 
// Example of concatenating a variable with a number
myAge = myAge + 1;

        // TYPEOF************

// Use typeof to check the type of a variable. In this case, the type is a number.
console.log(typeof myAge);

        // UPPERCASE CONSTANTS************

// Using uppercase constants are only for universal truths, such as these ones.
const METERS_TO_FEET = 3.281;
const SECONDS_PER_DAY = 60*60*24;

        // NULL************

// The use of null is for the intentional absence of a value.
const emptyObject = null;

        // BOOLEANS************

// Using true or false as values are called booleans. Other booleans can be "on" or "off", "1" or "0", an empty string "", or a non-empty string "non-empty string".
const trueObject = true;
const falseObject = false;

        // &&AND ||OR ************

// Using the symbol || means 'or'. Using the symbol && means 'and'.
const trueOrFalseObject = true || false && true;

        // SUBSTRING************

// Use substring() to extract portions of a string, like these examples below.
let originalString = "Hello, World!";
let substring = originalString.substring(0, 5);
console.log(substring); // Output: "Hello"
console.log("Programming".substring(3, 7)); // Output: "gram"

        // TOUPPERCASE & TOLOWERCASE************

// You can convert a string to uppercase or lowercase with toUpperCase() or toLowerCase() as provided below.
let originalCase = "uppercase";
let toUpperCase = originalCase.toUpperCase();
console.log(toUpperCase); // Output: "UPPERCASE"
toUpperCase = toUpperCase.toLowerCase();
console.log(toUpperCase); // Output: "uppercase"

        // ARRAYS************

// Arrays are numerically indexed, collections of data where each item can be any data type, including other arrays and/or objects. Here's an example below.
// In JavaScript, you always count from 0
let hobbies = ['Animation', '3D Printing', ['Surfing', 'Snowboarding', 'Baseball']];
console.log(hobbies[0]); // Output: "Animation"
console.log(hobbies[0][0]); // Output: "A"
console.log(hobbies[2][0]); // Output: "Surfing"
console.log(hobbies[2][0][0]); // Output: "S"

        // OBJECTS************

// Objects are collections of key-value pairs, known as properties. Here is an example below.
// Always end a property with a comma before writing the next property, other wise it will output an error.
const player1 = {
    name: 'Player 1',
    age: 26,
    height: "5'9",
    weight: "180lbs"
};

        // DOT NOTATION & SQUARE BRACKET NOTATION************

// You can either read and write propery values using either dot notation or square bracket notation, as shown below.
// dot notation example
console.log(player1.name); // Output: "Player 1"
// square bracket notation example
console.log(player1['age']); // Output: 26

        // OBJECT.FREEZE************

// Properties within an object are mutable by default, so to make it immutable, you can use the Object.freeze() function. 
// Uncomment the code below for this to work.
// Object.freeze(player1);
player1.age = 27;
console.log(player1['age']); // Output: 27

        // FUNCTIONS************

// a Function is a re-usable set of commands that can be called from other parts of your code and optionally recieve or return data.
// Here is an example of how a function can be used.
const firstName = "John";
const lastName = "Doe";

function fullName() { 
    return firstName + ' ' + lastName; 
};

console.log(fullName()); // Output: "John Doe"

        // DATE************

// This is the syntax for creating a new Date object.
const myDate = new Date();
// This generates a new Date object set to the date and time of when it was instantiated.

// Alternatively, you can set a dateString when creating a Date object
const classStartDate = new Date('January 14, 2021 16:00:00');
console.log(classStartDate);

        // SETS************

// This is the syntax for creating a new Set Object.
let mySet = new Set();

// Adding values to the Set
mySet.add('apple');
mySet.add('banana');
mySet.add('orange');
// Using Set ensures that only unique values are stored. If you attempt to add a value that already exists in the Set, it won't result in duplicate entries.
mySet.add('apple'); // Attempting to add a duplicate value

// Notice that the output only retains one instance of apple in it, and not two
console.log(mySet); // Output: Set { 'apple', 'banana', 'orange' }

// Checking if a value is in the Set
console.log(mySet.has('banana')); // Output: true

// Removing a value from the Set
mySet.delete('banana');
console.log(mySet); // Output: Set { 'apple', 'orange' }

        // MAPS************

// This is the syntax for creating a new Map Object.
let myMap = new Map();

// Adding key-value pairs to the Map
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');

console.log(myMap); 
// Output: Map {
//   'name' => 'John',
//   'age' => 30,
//   'city' => 'New York'
// }

// Getting values by key
console.log(myMap.get('name')); // Output: John

// Checking if a key exists in the Map
console.log(myMap.has('age')); // Output: true

// Deleting a key-value pair from the Map
myMap.delete('age');
console.log(myMap); 
// Output: Map {
//   'name' => 'John',
//   'city' => 'New York'
// }

// GETELEMENTBYID************

// The syntax for how to use document.getElementById().
// In the HTML file connected to this script, I added an id attribute to the h2 tag called "main-content". This is how you can access it with document.getElementById().
const mainContent = document.getElementById("main-content");
console.log(mainContent); // Output: "This sentence is stored in the h2 content."

// TEXTCONTENT************

// Now that you've accessed the main content with document.getElementById, you can now manipulate it.
// Here is an example of how you can change the text using textContent 
mainContent.textContent = "I've now changed this sentence with JavaScript!"; // Output: "I've now changed this sentence with JavaScript!"
