const form = document.querySelector("form");
const emailInput = form.querySelector("input");
const invalidEmailText = form.querySelector(".form__invalidEmailText");
const defaultCard = document.querySelector(".defaultCard");
const successCard = document.querySelector(".successCard");
const dismissButton = successCard.querySelector("button");
const userMailText = successCard.querySelector(".successCard__text--userMail");

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

const handleSubmit = (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));
  if (validateEmail(data.email)) {
    defaultCard.style.display = "none";
    successCard.style.display = "flex";
    userMailText.innerText = data.email;
    emailInput.style.border = "1px solid #19182b1f";
    emailInput.style.backgroundColor = "#FFF";
    invalidEmailText.style.display = "none";
  } else {
    emailInput.style.border = "1px solid #FF6155";
    emailInput.style.backgroundColor = "#FF615526";
    invalidEmailText.style.display = "inline";
  }
};

form.addEventListener("submit", handleSubmit);

dismissButton.addEventListener("click", () => {
  defaultCard.style.display = "block";
  successCard.style.display = "none";
  form.reset();
});
