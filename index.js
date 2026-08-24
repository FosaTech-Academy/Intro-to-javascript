/**
 * 1. Integer: 1, 2, 3, 4, 5, 6..
 * 2. Float: 1.1, 2.2, 3.3, 4.4, 5.5, 6.6..
 * 3. String: "Hello, world!", "JavaScript is fun!"
 * 4. Boolean: true, false
 * 5. Null: null
 * 6. Undefined: undefined
 */

console.log("Hello, world!"); // String
console.log(42); // Integer
console.log(3.14); // Float
console.log(true); // Boolean
console.log(false); // Boolean
console.log(null); // Null
console.log(undefined); // Undefined

// declare or initialize
// there are two keywords for creating variable: let and const
let studentName = "Japheth";
let age = 25;
let isStudent = true;
let currentGPA = 4.15;
let favoriteSport;

const schoolName = "Fosa-Tech Academy";

studentName = 45;

console.log(studentName);

// operators
console.log(5 + 5); // 10
console.log(10 - 5); // 5
console.log(5 * 5); // 25
console.log(10 / 2); // 5
console.log(7 / 2); // 3.5
console.log(10 % 3); // 1

// comparison operators
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 3); // true
console.log(5 <= 3); // false
console.log(5 === "5"); // false
console.log(5 !== "5"); // true

// const password = "123456";
// const userInput = prompt("Enter your password: ");

// const isCorrectPassword = password === userInput;

// if (isCorrectPassword) {
//   alert("Login Successful!");
// } else {
//   alert("Incorrect credentials. Please try again.");
// }

// loops
const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

numbers.forEach((number) => console.log(number));

const helloWorldText = document.getElementsByTagName("h1")[0];
helloWorldText.innerHTML = "Hello, world! This is my first JavaScript program.";
helloWorldText.style.color = "red";
