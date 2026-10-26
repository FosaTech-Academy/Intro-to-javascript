// two important data structures you need in javascript programming
// 1. Array 2. Objects

// an object is a key-value pair

const chatAbbr = {
  lol: "Laugh out loud",
  llnp: "Long life and prosperity",
  ggyb: "Go will make you bigger",
};

// console.log(chatAbbr);
// console.log(chatAbbr.lol);
// console.log(chatAbbr["llnp"]);

const user = {
  "full name": "John Doe",
  age: 21,
  gender: "male",
  isStudent: false,
  skills: ["Python", "Typescript", "SQL", "Html"],
  greetTheBrethren: () => `Hello oo, my name is ${user["full name"]}`,
};

console.log(user.greetTheBrethren());

// console.log(user);

// for (skill of user.skills) {
//   console.log(skill);
// }

const user2 = { ...user };
const user3 = Object.assign({}, user2);
user3["full name"] = "James Rodriguez";
user2["full name"] = "James Brown";
console.log(user, user2, user3);

// const userArr = Object.entries(user);
// console.log(userArr);

const personCharacter = {};
personCharacter.height = "192m";
personCharacter["Full name"] = "Person 1";
// console.log(personCharacter);
