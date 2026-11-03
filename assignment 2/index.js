// Get access to all the sections in the DOM
const registerFormSection =
  document.getElementsByClassName("registerSection")[0];
const loginFormSection = document.getElementsByClassName("loginSection")[0];
const dashboardSection = document.getElementsByClassName("dashboard")[0];
const loginMessage = document.getElementById("login-message");
const registerMessage = document.getElementById("register-message");
const loginLink = document.querySelector("#login-link");
const welcomeMessage = document.querySelector("#welcome-message");

// hide all sections except the register form section and if the user is not logged in.
const isLoggedIn = userIsLoggedIn();
if (isLoggedIn) {
  registerFormSection.style.display = "none";
  loginFormSection.style.display = "none";
  dashboardSection.style.display = "block";
  displayDashboardUsers();
} else {
  registerFormSection.style.display = "block";
  loginFormSection.style.display = "none";
  dashboardSection.style.display = "none";
}

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  registerFormSection.style.display = "none";
  loginFormSection.style.display = "block";
});
// Get access to the login form
const loginForm = document.getElementsByClassName("loginForm")[0];
loginForm.addEventListener("submit", handleLoginSubmit);

// Get access to the register form
const registerForm = document.getElementsByClassName("registerForm")[0];
registerForm.addEventListener("submit", handleRegisterSubmit);

// Get access to the logout button
const logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("loggedInUser");
  registerFormSection.style.display = "block";
  loginFormSection.style.display = "none";
  dashboardSection.style.display = "none";
});
function handleRegisterSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const user = {};

  user.fullName = formData.get("fullName");
  user.email = formData.get("email");
  user.password = formData.get("password");

  const result = saveUserToDb(user);
  if (result.code === 409) {
    registerMessage.innerText = result.message;
    registerMessage.style.color = "red";
    const timeOutId = setTimeout(() => {
      registerMessage.innerText = null;
      clearTimeout(timeOutId); // clear the timeout to prevent memory leaks
    }, 3000);
  }

  if (result.code === 201) {
    registerFormSection.style.display = "none";
    loginFormSection.style.display = "block";
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");

  const result = findUserByEmail(email);
  if (result.code === 404) {
    loginMessage.innerText = "Invalid email or password";
    loginMessage.style.color = "red";
    const timeOutId = setTimeout(() => {
      loginMessage.innerText = null;
      clearTimeout(timeOutId); // clear the timeout to prevent memory leaks
    }, 3000);
  }

  if (result.code === 200) {
    if (result.data.password !== password) {
      loginMessage.innerText = "Invalid email or password";
      loginMessage.style.color = "red";
      const timeOutId = setTimeout(() => {
        loginMessage.innerText = null;
        clearTimeout(timeOutId); // clear the timeout to prevent memory leaks
      }, 3000);
      return; // stop execution if password is incorrect (you can also use an else statement here, but this is cleaner)
    }
    saveLogin(result.data);
    loginMessage.innerText = "Login successful";
    loginMessage.style.color = "green";
    loginFormSection.style.display = "none";
    dashboardSection.style.display = "block";
    displayDashboardUsers();
  }
}

function userIsLoggedIn() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedInUser?.email) {
    return false;
  }
  return true;
}

function displayDashboardUsers() {
  const allUsers = getAllUsers();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  welcomeMessage.innerText = `Welcome back ${loggedInUser?.fullName}`;

  allUsers.forEach((user) => {
    const usersTable = document.querySelector("#users-table-body");
    const userRow = document.createElement("tr");
    const userIdCell = document.createElement("td");
    userIdCell.textContent = user.id;
    const userFullNameCell = document.createElement("td");
    userFullNameCell.textContent = user.fullName;
    const userEmailCell = document.createElement("td");
    userEmailCell.textContent = user.email;

    userRow.appendChild(userIdCell);
    userRow.appendChild(userFullNameCell);
    userRow.appendChild(userEmailCell);

    usersTable.appendChild(userRow);
  });
}
