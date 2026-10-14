// functions
// parameters are variables that are passed into a function
// arguments are the values that are passed into a function when it is called
function addTwoNumbers(a, b) {
  return a + b;
}

const sumOfTwoNumbers = addTwoNumbers(1, 2);
console.log(sumOfTwoNumbers);

console.log(addTwoNumbers(1, 2));
console.log(addTwoNumbers(4, 5));

let i = 0;
function generateUsername(firstName, lastName) {
  let i = 45;
  const numberCharacters = "1234567890";
  const randomIndex = Math.floor(Math.random() * numberCharacters.length);
  return firstName + "." + lastName + numberCharacters[randomIndex];
}

console.log(generateUsername("John", "Doe"));
console.log(i);

// const fullName = prompt("Enter your full name:");
// const fullNameArray = fullName.split(" ");
// const username = generateUsername(
//   fullNameArray[0].toLowerCase(),
//   fullNameArray[1].toLocaleLowerCase(),
// );

// alert("Your username is: " + username);

// functions with unlimited number of parameters
function sumAllNumbers(...numbers) {
  //   console.log(numbers);
  numbers.forEach((number) => {
    console.log(number);
  });
}

sumAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
