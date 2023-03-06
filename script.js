const hamburger = document.querySelector(".ham");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll(".links").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.toggle("active");
  })
);
