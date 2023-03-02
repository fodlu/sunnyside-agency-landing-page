const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("active");
});

document.querySelectorAll(".links").forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.toggle("active");
  })
);

// .container .nav .nav_link ul
