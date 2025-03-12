// 1. Comments
console.log("This is a single-line comment.");
/* This is a multi-line comment.
It can span multiple lines. */

// 2. Variables
let name = "John";
const age = 30;
var city = "New York";

console.log(name, age, city);

// 3. Statements
let x = 10;
console.log(x);

// 4. Values and Types
let num = 10; // Number
let str1 = "Hello"; // String
let isActive = true; // Boolean
let obj = { name: "Alice", age: 25 }; // Object

console.log(num, str1, isActive, obj);

// 5. Operators
let sum = 10 + 5;
let isEqual = 10 == 5;
let isTrue = true && false;

console.log(sum, isEqual, isTrue);

// 6. Functions
function greet(name) {
  console.log("Hello, " + name);
}
greet("John");

// 7. Parameters and Optional Parameters
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet(); // Output: Hello, Guest
greet("Alice"); // Output: Hello, Alice

// 8. Scope of Variables
function testScope() {
  let localVar = "I'm local"; // Local scope
  console.log(localVar);
}

testScope();
// console.log(localVar); // Error: localVar is not defined outside the function

// 9. Expression Function
const square = function (x) {
  return x * x;
};

console.log(square(5)); // Output: 25

// 10. Methods
let person1 = {
  name: "John",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

person1.greet(); // Output: Hello, John

// 11. Test Methods
let fruits1 = ["apple", "banana", "cherry"];
console.log(fruits1.includes("banana")); // Output: true

let str = "Hello, World!";
console.log(str.indexOf("World")); // Output: 7

// 12. Loops
// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}

// While Loop
let i = 0;
while (i < 5) {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
}

// 13. Switch
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}

// 14. Objects
let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

console.log(person.name); // Output: John
person.greet(); // Output: Hello, John

// 15. Array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // Output: banana

// 16. Methods in Array
let numbers = [1, 2, 3];
numbers.push(4); // Adds 4 to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4]

numbers.pop(); // Removes the last element
console.log(numbers); // Output: [1, 2, 3]

// 17. Call Stack
function first() {
  second();
}

function second() {
  console.log("Hello from the second function");
}

first(); // Output: Hello from the second function

// 18. HTML DOM Structure
document.body.style.backgroundColor = "lightblue"; // Changes the background color

// 19. JS as External File
console.log("JavaScript is linked as an external file.");

// 20. Real-Time Application Using JS
let counter = 0;
setInterval(function () {
  counter++;
  console.log("Counter: " + counter); // Output: Counter: 1, 2, 3, etc.
}, 1000);
