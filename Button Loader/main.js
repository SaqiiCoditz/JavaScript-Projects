const btns = document.querySelectorAll(".btns button");
const loader = document.querySelector(".loader");
const percentage = document.querySelector(".percentage p");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    loader.style.width = button.textContent;
    percentage.textContent = button.textContent;
  });
});
