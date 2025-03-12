// 1. Simple Calculator: Addition of two numbers
function calculateSum() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sum = num1 + num2;
  document.getElementById("sum").textContent = sum;
}

// 2. Multiplication using Functions
function multiplyNumbers() {
  let num1 = parseFloat(document.getElementById("mul1").value);
  let num2 = parseFloat(document.getElementById("mul2").value);
  let result = multiply(num1, num2);
  document.getElementById("mulResult").textContent = result;
}

function multiply(a, b) {
  return a * b;
}

// 3. Methods and Loops: Example of loop
function loopExample() {
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += "Loop iteration: " + (i + 1) + "<br>";
  }
  document.getElementById("loopOutput").innerHTML = result;
}

// 4. Sum of Arguments
function sumOfArguments() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  document.getElementById("argumentsSum").textContent =
    "Sum of Arguments: " + sum;
}

// 5. Object Data Structure and Accessing Properties
function accessObjectData() {
  let person = {
    name: "John",
    age: 30,
    greet: function () {
      return "Hello, " + this.name;
    },
  };
  document.getElementById("objectData").textContent = person.greet();
}

// 6. Accessing Array Elements
function accessArrayData() {
  let fruits = ["Apple", "Banana", "Cherry"];
  document.getElementById("arrayData").textContent =
    "First fruit: " + fruits[0];
}

// 7. Accessing Values with HTML DOM Structure
function displayText() {
  let text = document.getElementById("inputText").value;
  document.getElementById("displayText").textContent = text;
}
