console.log("Hello World");

const mainElement = document.querySelector("[data-js='main']");
// mainElement.classList.add("dark");
// console.log(mainElement.classList);

const myLoggingButton = document.querySelector("[data-js='logging-button']");

myLoggingButton.addEventListener("click", () => {
  console.log("You clicked me");
});

const addColorButton = document.querySelector("[data-js='add-button']");
const removeColorButton = document.querySelector("[data-js='remove-button']");
const toggleColorButton = document.querySelector("[data-js='toggle-button']");

addColorButton.addEventListener("click", () => {
  mainElement.classList.add("dark");
});

removeColorButton.addEventListener("click", () => {
  mainElement.classList.remove("dark");
});
toggleColorButton.addEventListener("click", () => {
  mainElement.classList.toggle("dark");
});
