## Assignment 2

#### Instructions
- Show the user registration form only on the page
- Upon successful registration, hide the user create form and show the login form
- Authenticate the user and show validation errors where necessary with the login-message class element
- Upon successful login, show the dashboard section only listing all the users stored in the database
- Our database will be localStorage
- Save all users upon registration in the localStorage (hint: append a new user object to a users array in the localStorate.)
```json
"users": [
    {"id": 1, "fullName": "Idahosa Peter", "email": "peter@gmail.com"},
    {"id": 2, "fullName": "Wisdom Japheth", "email": "wisdom@gmail.com"}
]"
```
- When they log in, add the loggedInUser to another  localstorage object
```json
"loggedInUser": {
    "fullName": "Idahosa Peter"
}
```
- If they log out, remove that loggedInUser from the localStorage
```json
"loggedInUser": {}
```