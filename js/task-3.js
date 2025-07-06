const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
// console.log(input);
// console.log(nameOutput);

const onInputInput = (event) => {
  const value = event.target.value;
  const trimmedValue = value.trim();

  if (trimmedValue.length === 0) {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = trimmedValue;
  }
};

input.addEventListener("input", onInputInput);
