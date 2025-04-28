const form = document.querySelector("form");
const formEmail = document.querySelector("input");
const error = document.querySelector("span");
const signup = document.getElementById("signup");
const dismiss = document.getElementById("reset");
const success = document.getElementById("success");
const email = document.querySelector("strong");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (formEmail.value === "" || !regex.test(formEmail.value)) {
    error.style.display = "block";
    formEmail.style.backgroundColor = "hsl(4, 100%, 75%)";
    formEmail.style.borderColor = "hsl(4, 100%, 75%)";
  } else {
    signup.style.display = "none";
    success.style.display = "flex";
    email.textContent = formEmail.value;
  }
});

dismiss.addEventListener("click", () => {
  signup.style.display = "flex";
  success.style.display = "none";
  formEmail.style.backgroundColor = "white";
  formEmail.value = "";
});
