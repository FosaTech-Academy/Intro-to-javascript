/**
 * Boolean = true or false
 * Truthy values
 * - true
 * - All positive and negative numbers
 * - All strings
 *
 * Falsy values
 * - false
 * - 0
 * - Empty string ("", '', ``)
 * - null
 * - undefined
 * - NaN
 *
 */

/**
 * LOGICAL OPERATIONS
 * && - AND
 * || - OR
 * ! - NOT
 */

/**
 * Ternary Operator
 * condition ? execute if true : execute if false
 */

// let isCancelWork = confirm(
//   "Are you sure you want to quit, you have unsaved work",
// );

// isCancelWork ? alert("Bye for now") : console.log("Continue working");

const now = new Date();

date.toLocaleString("en-US", { timeZone: "America/New_York" });

now.toLocaleString("en-US", {
  // timeZone:
});

const isSummer = ["April", "May", "June", "July", "August", "September"];

const isWinter = [
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
];

const isFall = ["September", "October", "November"];

const isSpring = ["March", "April", "May"];

const userInput = prompt("What month is it?");

if (isSummer.includes(userInput)) {
  console.log("It's summer");
} else if (isWinter.includes(userInput)) {
  console.log("It's winter");
} else if (isFall.includes(userInput)) {
  console.log("It's fall");
} else if (isSpring.includes(userInput)) {
  console.log("It's spring");
} else {
  console.log("Invalid month");
}
