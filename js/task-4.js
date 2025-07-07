const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const emailInputEl = event.target.elements.email;
  const passwordInputEl = event.target.elements.password;
  const emailInputValue = emailInputEl.value.trim();
  const passwordInputValue = passwordInputEl.value.trim();

  if (emailInputValue.length === 0 || passwordInputValue.length === 0) {
    return alert("All form fields must be filled in");
  }
  const refs = {
    [emailInputEl.name]: emailInputValue,
    [passwordInputEl.name]: passwordInputValue,
  };
  event.target.reset();
  return console.log(refs);
};

form.addEventListener("submit", onFormSubmit);
