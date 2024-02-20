const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
    link.addEventListener("click");
  });
});

const underlineElement = document.querySelector(".underline");

underlineElement.addEventListener("click", function () {
  // Tilføj en klasse til at ændre stylingen
  underlineElement.classList.add("clicked");

  // Hvis du også vil fjerne hover-effekten efter kliket
  underlineElement.removeEventListener("mouseenter", addUnderline);
  underlineElement.removeEventListener("mouseleave", removeUnderline);

  console.log("Stregen er blevet klikket!");
});
