// Variables - same as console JavaScript
let clickCount = 0;

// Get references to HTML elements
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset-page");

const countElement = document.getElementById("click-count");

// Function - same logic as console JavaScript
function incrementCount() {
  clickCount++;
  countElement.textContent = `Button clicks: ${clickCount}`;
  // Change page background when count reaches 10 or more
  if (clickCount >= 10) {
    document.body.style.backgroundColor = "#fff3b0"; // light yellow
  } else {
    document.body.style.backgroundColor = "";
  }
}
function decrementCount() {
  clickCount--;
  countElement.textContent = `Button clicks: ${clickCount}`;
  // Change page background when count reaches 10 or more
  if (clickCount >= 10) {
    document.body.style.backgroundColor = "#fff3b0";
  } else {
    document.body.style.backgroundColor = "";
  }
}
function resetCount() {
  clickCount = 0;
  countElement.textContent = `Button clicks: ${clickCount}`;
  // Reset page background when resetting
  document.body.style.backgroundColor = "";
}
// Event listener - this is new! Responds to user interaction
incrementButton.addEventListener("click", incrementCount);
decrementButton.addEventListener("click", decrementCount);
resetButton.addEventListener("click", resetCount);
