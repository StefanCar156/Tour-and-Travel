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
const navLink = document.querySelectorAll(".nav-link");

navBtn.addEventListener("click", () => {
  navbar.classList.toggle("nav-links-active");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("nav-links-active");
  });
});
