// Setting elements
let registerName = document.getElementById("name");
let registerSurname = document.getElementById("surname");
let registerBirthday = document.getElementById("dateOfBirth");
let registerCountry = document.getElementById("country");
let registerGender = document.getElementsByName("gender");
let registerEmail = document.getElementById("email");
let registerUsername = document.getElementById("username");
let registerPassword = document.getElementById("password");
let submitButton = document.getElementById("submitBtn");
let logInUserName = document.getElementById("userName");
let logInPassword = document.getElementById("userPassword");
let logInButton = document.getElementById("loginBtn");
let registerForm = document.getElementById("registerForm");
let registerh2 = document.getElementById("registerh2");
let loginForm = document.getElementById("loginForm");
let loginh2 = document.getElementById("loginh2");
// let redirectToLogin = document.getElementById("redirectToLogin");
// let redirectToRegister = document.getElementById("redirectToRegister");
// const upperCase = new RegExp("(?=.*[A-Z])");
// const number = new RegExp("(?=.*[0-9])");
// const specialChar = new RegExp("(?=.*[!@#$%^&*])");
let newUserData = [];
let loggedUser = [];

loginh2.style.display = 'none';
loginForm.style.display = 'none';

console.log(newUserData);
// Creating User constructor

function User(name, surname, birthday, country, gender, email, username, password) {
  this.name = name;
  this.surname = surname;
  this.birthday = birthday;
  this.country = country;
  this.gender = gender;
  this.email = email;
  this.username = username;
  this.password = password;
}

// Creating new user
function registerUser(name, surname, birthday, country, gender, email, username, password) {
  let newUser = new User(name, surname, birthday, country, gender, email, username, password);
  newUserData.push(newUser);
}

// Clear inputs
function clearInputs() {
  registerName.value = "";
  registerSurname.value = "";
  registerEmail.value = "";
  registerUsername.value = "";
  registerPassword.value = "";
}

// Check if user exists
function existingUser() {
  for (let i = 0; i < newUserData.length; i++) {
    if (newUserData[i].value === username.value) {
      alert("The user already exists!");
    }
  }
}

// Validating inputs
let specialCharacters = /[^A-Za-z0-9]/;
function validation(name, surname, birthday, country, gender, email, username, password) {
  if (!isNaN(name)) {
    alert(`Names don't have numbers. Please use letters only!`);
  }
  else if (!isNaN(surname)) {
    alert(`Surnames don't have numbers. Please use letters only!`);
  }
  else if (!isNaN(country)) {
    alert(`Countries don't have numbers. Please use letters only!`);
  }
  else if (!specialCharacters.test(password)) {
    console.log(!specialCharacters.test(password));
    alert("Password should contain atleast one number and one special character");
    return false;
  }
  else {
    // Check for existing users
    existingUser();
    // Creating user
    registerUser(name, surname, birthday, country, gender, email, username, password);
    alert("User successfully created!");
    // Clearing inputs
    clearInputs();
  }
}

// Creating loginUser function
console.log(loggedUser);

function loginUser(arrayOfUsers, username, password) {
  console.log(arrayOfUsers);
  if (!username && !password) {
    alert("Please enter both username and password fields");
  }

  for (let i = 0; i < arrayOfUsers.length; i++) {
    if (arrayOfUsers[i].username === username && arrayOfUsers[i].password === password) {
      loggedUser.push(arrayOfUsers);
    }
  }
  if (loggedUser.length > 0) {
    console.log(loggedUser);
    console.log("User you are logged in");
    //   alert(`Welcome ${loggedUser[0][0].name}`);
    console.log(loggedUser[0]);
  }
  else {
    console.log("no user");
  }
}
console.log(newUserData);


submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  validation(registerName.value, registerSurname.value, registerBirthday.value, registerCountry.value, registerGender.value,
    registerEmail.value, registerUsername.value, registerPassword.value);
  console.log(newUserData);
});

let testUser = new User(
  "Velimir",
  "Stojanov",
  "1996",
  "Macedonia",
  "Male",
  "mail@mail.com",
  "asd",
  "asd"
);
newUserData.push(testUser);
console.log(testUser);

logInButton.addEventListener("click", function (e) {
  console.log(newUserData);
  e.preventDefault();
  loginUser(newUserData, logInUserName.value, logInPassword.value);
});

if (redirectToLogin) {
  redirectToLogin.addEventListener("click", function () {
    registerh2.style.display = 'none';
    registerForm.style.display = 'none';
    loginh2.style.display = 'block';
    loginForm.style.display = 'block';
  });
}
if (redirectToRegister) {
  redirectToRegister.addEventListener("click", function () {
    registerh2.style.display = 'block';
    registerForm.style.display = 'block';
    loginh2.style.display = 'none';
    loginForm.style.display = 'none';
  });
}
