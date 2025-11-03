// Variables - same as console JavaScript
let clickCount = 0;

// Get references to HTML elements
const greetingElement = document.getElementById("greeting");
const button = document.getElementById("change-greeting");
const resetButton = document.getElementById("reset-page");
const greetingInput = document.getElementById("greeting-input");
const setGreetingButton = document.getElementById("set-greeting");
const countElement = document.getElementById("click-count");

// Function - same logic as console JavaScript
function updateGreeting() {
  clickCount++;
  greetingElement.textContent = "Hello, Browser JavaScript!";
  countElement.textContent = `Button clicks: ${clickCount}`;
  // Turn text red after more than 5 clicks, otherwise reset color
  if (clickCount > 4) {
    greetingElement.style.color = "red";
  } else {
    greetingElement.style.color = "";
  }
}

function resetGreeting() {
  clickCount = 0;
  greetingElement.textContent = "Hello, Console JavaScript!";
  countElement.textContent = `Button clicks: ${clickCount}`;
  // Reset color when page is reset
  greetingElement.style.color = "";
  // Clear input value if present
  if (greetingInput) greetingInput.value = "";
}

// Event listener - this is new! Responds to user interaction
button.addEventListener("click", updateGreeting);
resetButton.addEventListener("click", resetGreeting);

// Set greeting from input when the Set button is clicked
if (setGreetingButton && greetingInput) {
  setGreetingButton.addEventListener("click", () => {
    const val = greetingInput.value.trim();
    if (val.length > 0) {
      greetingElement.textContent = val;
    }
  });

  // Allow pressing Enter in the input to set the greeting
  greetingInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      setGreetingButton.click();
    }
  });
}
