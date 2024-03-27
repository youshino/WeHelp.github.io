const Button = document.querySelector("button");
const DisplayText = document.querySelector(".displayText");
console.log(Button);
console.log(DisplayText);

Button.addEventListener("click", (e) => {
  if (DisplayText.style.display == "block") {
    DisplayText.style.display = "none";
  } else {
    DisplayText.style.display = "block";
  }
});
