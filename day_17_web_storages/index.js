// const user = {
//   "full name": "John Doe",
//   age: 21,
//   gender: "male",
//   isStudent: false,
//   skills: ["Python", "Typescript", "SQL", "Html"],
// };

// const jsonStringUser = JSON.stringify(user);
// localStorage.setItem("loggedInUser", jsonStringUser);

// const loggedInUser = localStorage.getItem("loggedInUser");

// console.log(JSON.parse(loggedInUser));

const loggedInUserKey = "loggedInUser";
const storedDataString = localStorage.loggedInUser;
const user = JSON.parse(storedDataString);

const newSkills = user.skills.filter((value) => value.toLowerCase() !== "html");

user.skills = newSkills;

const userString = JSON.stringify(user);

console.log("local storage before", localStorage.getItem(loggedInUserKey));
localStorage.setItem(loggedInUserKey, userString);
console.log("local storage after", localStorage.getItem(loggedInUserKey));
