/**
 *
 * User object structure
 *
 * Id: number (System generated)
 * FullName: string
 * Email: string
 * Password: string
 *
 * Database (localstorage) structure
 * "users": [
 *   {"id": 1, "fullName": "Idahosa Peter", "email": "peter@gmail.com", "password": "123456"},
 *   {"id": 2, "fullName": "Wisdom Japheth", "email": "wisdom@gmail.com", "password": "123456"}
 * ]
 */

const USER_DB_KEY = "users";

function saveUserToDb(user) {
  const dbUser = findUserByEmail(user.email);
  if (dbUser.code === 404) {
    // user does not exist, we can create a new user
    user.fullName = capitalizeName(user.fullName);
    dbSetItem(USER_DB_KEY, user);
    return { code: 201, message: "User created successfully", data: user }; // 201 means created
  }
  return {
    code: 409, // conflict (to prevent duplicate user creation)
    message: "An account with email already exists",
    data: null,
  };
}

function findUserByEmail(email) {
  const usersInDatabase = dbGetItem(USER_DB_KEY);
  const user = usersInDatabase.find((u) => u.email === email);
  if (!user) {
    return { code: 404, message: "User record not found", data: null };
  }
  return { code: 200, message: "User fetched successfully", data: user }; // 200 means success
}

function getAllUsers() {
  return dbGetItem(USER_DB_KEY);
}

// DATABASE helper functions
function dbGetItem(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function dbSetItem(key, value) {
  const usersInDatabase = dbGetItem(USER_DB_KEY);
  value.id = usersInDatabase.length + 1;
  usersInDatabase.push(value);
  localStorage.setItem(key, JSON.stringify(usersInDatabase));
  return true;
}

function capitalizeName(name) {
  const nameParts = name.split(" ");
  return nameParts
    .map(
      (name) =>
        name[0].toUpperCase() + name.slice(1, name.length).toLowerCase(),
    )
    .join(" ");
}

function saveLogin(user) {
  localStorage.setItem("loggedInUser", JSON.stringify(user));
}
