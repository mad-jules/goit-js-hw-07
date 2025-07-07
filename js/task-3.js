const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const value = event.target.value;
  const trimmedValue = value.trim();

  if (trimmedValue.length === 0) {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = trimmedValue;
  }
});
