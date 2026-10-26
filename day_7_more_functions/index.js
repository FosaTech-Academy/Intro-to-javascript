// functions as first class citizens
/**
 * 1. They can be assigned to a variable
 * 2. They can be passed as an argument to a function
 * 3. They can be returned in another function
 */

const sayHi = function () {
  return "Hello";
};

function greetAFriend(sayHiFunction) {
  console.log(sayHiFunction());
}

function grantWish(wish) {
  return "Your wish: " + wish + " has been granted";
}

function sayYourWish() {
  return grantWish;
}

const myWish = "I wish to become a full stack software engineer";

const grantMyWish = sayYourWish();

// arrow functions
const sayMyName = (name) => `Your name is ${name}`;

// console.log(sayMyName("Japheth Wisdom"));

// self-invoking function (IIFE)

(function () {
  const currentTime = new Date();
  return currentTime.toTimeString();
})();

// function with default parameter
// console.log("Choose your character: [Lui Kang, Raiden, Jax, Scorpion]");

function chooseYourCharacter(character = "Lui Kang") {
  return `Your character is ${character}`;
}

// console.log(chooseYourCharacter());

// local scope
function currentDayOfTheWeek() {
  const date = new Date();
  const today = date.getDay();

  if (today === 1) {
    const dayOfTheWeek = "Monday";
    console.log(dayOfTheWeek);
  }
}

// currentDayOfTheWeek();

// callback: is a function that is passed a parameter to another function

function multiplyBy2(v) {
  sum += v;
  // console.log("Current value of sum is ", sum);
}

sum = 0;

const d = [1, 2, 3, 4, 5];
d.forEach(multiplyBy2);

// console.log(d);
// console.log("Final value of sum is ", sum);

// function sendDelayedMessage() {
//   console.log("Hi there :)");
// }

// console.log("Loading....");
// setTimeout(sendDelayedMessage, 3000);

// map

const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
const generateCountryCode = (country) => country.slice(0, 3);

const newCountryWithCode = countries.map(generateCountryCode);
// console.log(newCountryWithCode);

// filter
const countryHasLand = (country) => country.toLowerCase().endsWith("land");
const countriesWithLand = countries.filter(countryHasLand);
// console.log(countriesWithLand);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const isAnAStudent = (score) => score.score >= 70;
const aStudents = scores.filter(isAnAStudent);

// console.log(aStudents);

// reduce (later or assignment)

// every -> returns a boolean true if the condition matches ALL the elements in the array
const names = ["Elijah", "Elisha", "Elias", "Enoch"];

const isFirstElementEqualToE = names.every((value) => value[0] === "E");

console.log("isFirstElementEqualToE", isFirstElementEqualToE);

// some -> returns a boolean true if the condition matches SOME of the elements in the array
const namesArr = ["Asabeneh", "Mathias", "Elias", "Brook"];
const isElementHasA = namesArr.some((value) =>
  value.toLowerCase().includes("a"),
);
console.log("isElementhasA", isElementHasA);

// find
const namesArr2 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const searchUser = namesArr2.find((value) => value.length <= 5);
console.log(searchUser);
