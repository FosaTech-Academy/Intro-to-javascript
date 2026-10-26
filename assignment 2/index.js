const registerFormSection =
  document.getElementsByClassName("registerSection")[0];
const loginFormSection = document.getElementsByClassName("loginSection")[0];
const dashboardSection = document.getElementsByClassName("dashboard")[0];
const loadingSection = document.getElementById("loading");
const loginMessage = document.getElementById("login-message");

const registerForm = document.getElementsByClassName("registerForm")[0];
loginFormSection.style.display = "none";
dashboardSection.style.display = "none";
loadingSection.style.display = "none";

loginMessage.innerText = "Login successful, redirecting...";
loginMessage.style.color = "green";

function handleSubmit(e) {
  e.preventDefault();
  // loading screen
  setTimeout(function () {
    registerFormSection.style.display = "none";
    loginFormSection.style.display = "block";
  }, 2000);

  // loading screen
  setTimeout(function () {
    loginFormSection.style.display = "none";
    loadingSection.style.display = "block";
  }, 4000);

  // dashboard screen show after login is complete
  setTimeout(function () {
    loadingSection.style.display = "none";

    dashboardSection.style.display = "block";
  }, 7000);
}

registerForm.addEventListener("submit", handleSubmit);
