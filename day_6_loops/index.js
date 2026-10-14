// print the list in a reversed order using loop

const fruits = ["banana", "orange", "mango", "lemon"];

// console.log("using while loop");
// let counter = fruits.length - 1;
// while (counter >= 0) {
//   console.log(fruits[counter]);
//   counter--;
// }

// console.log("using for loop");
// for (i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

// Generate random characters
const lowerCaseAlphabets = "abcdefghikjlmnopqrstuvwxyz";
const upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacters = "#@!~$%^&*()-_+=\/<>,.{}";
const numberCharacters = "1234567890";

const randomCharacters = [
  lowerCaseAlphabets,
  upperCaseAlphabets,
  specialCharacters,
  numberCharacters,
];
new Set().forEach();
let specialIdSet = new Set();
let specialId = "";
let lengthOfId = 4;

for (i = 0; i < lengthOfId; i++) {
  specialIdSet.add(randomCharacters[i][Math.ceil(Math.random() * 6)]);
}
specialIdSet.forEach((v) => (specialId = specialId + v));
console.log(specialId);
