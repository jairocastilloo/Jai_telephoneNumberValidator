const checkBtn = document.querySelector("#check-btn");
const userInput = document.querySelector("#user-input");
const clearBtn = document.querySelector("#clear-btn");
const resultsDiv = document.querySelector("#results-div");

checkBtn.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
  } else if (
    userInput.value.match(/^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/)
  ) {
    const hElement = document.createElement("h3");
    hElement.textContent = `Valid US number: ${userInput.value}`;
    resultsDiv.appendChild(hElement);
  } else {
    const hElement = document.createElement("h3");
    hElement.textContent = `Invalid US number: ${userInput.value}`;
    resultsDiv.appendChild(hElement);
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
});
