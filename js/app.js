// Testimonials Section
const testimonialsData = [
  {
    name: "Edward Newgate",
    proffesion: "Photographer",
    review:
      "I've travelled around the world and took shot of beautiful landscapes",
    image: "../img/edward-newgate.jpg",
    rating: 5,
  },
  {
    name: "John Josh",
    proffesion: "Chef",
    review:
      "Travelling with them enabled me to try different national cuisines",
    image: "../img/john-josh.jpg",
    rating: 4,
  },
  {
    name: "Jerry Bolton",
    proffesion: "Alpinist",
    review: "With this agency, I've climbed to the top of the world",
    image: "../img/jerry-bolton.jpg",
    rating: 3,
  },
];

const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const userName = document.querySelector("#user-name");
const userProffesion = document.querySelector("#user-proffesion");
const userImage = document.querySelector("#testimonials-img");
const userReview = document.querySelector(".testimonials-paragraph");

let counter = 0;
arrowRight.addEventListener("click", () => {
  counter++;
  if (counter > testimonialsData.length - 1) {
    counter = 0;
  }
  userName.textContent = testimonialsData[counter].name;
  userProffesion.textContent = testimonialsData[counter].proffesion;
  userImage.src = testimonialsData[counter].image;
  userReview.textContent = testimonialsData[counter].review;
});

arrowLeft.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = testimonialsData.length - 1;
  }
  userName.textContent = testimonialsData[counter].name;
  userProffesion.textContent = testimonialsData[counter].proffesion;
  userImage.src = testimonialsData[counter].image;
  userReview.textContent = testimonialsData[counter].review;
});

// Toggle Navbar

const navBtn = document.querySelector(".menu-icon");
const navbar = document.querySelector(".nav-links");
const navLink = navbar.querySelectorAll("a");

navBtn.addEventListener("click", () => {
  navbar.classList.toggle("nav-links-active");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("nav-links-active");
  });
});

// Form
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check if email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1); // Capital Letter + The rest
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});

// Toggle Form
const formContainer = document.querySelector(".register-form-container");
const toggleFormBtn = document.querySelector(".register-btn");
console.log(toggleFormBtn);
toggleFormBtn.addEventListener("click", () => {
  formContainer.classList.toggle("register-form-open");
  window.scrollTo(0, 0);
});

const closeFormBtn = document.querySelector("#close-form-btn");
closeFormBtn.addEventListener("click", () => {
  formContainer.classList.remove("register-form-open");
});
