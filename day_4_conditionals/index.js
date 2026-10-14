let secretNumber = 7;
let userGuess = prompt("Guess the secret number between 1 and 10");
userGuess = Number(userGuess);

// if (userGuess === secretNumber) {
//   console.log("Your guess was correct!!");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//   console.log("Your guess was close!!");
// } else if (userGuess + 2 === secretNumber || userGuess - 2 === secretNumber) {
//   console.log("Your guess was very close!!");
// } else if (userGuess + 3 === secretNumber || userGuess - 3 === secretNumber) {
//   console.log("Your guess was very far!!");
// } else if (userGuess + 4 === secretNumber || userGuess - 4 === secretNumber) {
//   console.log("Your guess was very far!!");
// } else {
//   console.log("Your guess was wrong!!");
// }

// switch statement
switch (secretNumber) {
  case 7:
    console.log("Your guess was correct!!");
    break;
  case 6:
    console.log("Your guess was very close!!");
    break;
  case 5:
    console.log("Your guess was close!!");
    break;
  case 9:
    console.log("Your guess was close!!");
    break;
  case 8:
    console.log("Your guess was very close!!");
    break;
  default:
    console.log("Your guess was wrong!!");
}

const userDeviceInput = prompt("Enter your device make (iOS/Android)");

userDeviceInput
  ? console.log("You are using a/an " + userDeviceInput + " phone")
  : console.log("We do not recognise your device");

console.log("Continue executing our program");
