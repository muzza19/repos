// Function to validate name input - allow only letters
function validateName(name) {
  const lettersRegex = /^[A-Za-z]+$/;
  return lettersRegex.test(name);
}

// Function to validate number input - allow only numbers
function validateNumber(number) {
  const numbersRegex = /^[0-9]+$/;
  return numbersRegex.test(number);
}

// Prompt the user for their name
const name = prompt("Please enter your name:");

// Validate name input
if (!validateName(name)) {
  alert("Please enter a valid name with only letters.");
} else {
  // Prompt the user for their number
  const number = prompt("Please enter your number:");

  // Validate number input
  if (!validateNumber(number)) {
    alert("Please enter a valid number with only digits.");
  } else {
    alert("Login successful!");
  }
}
  
