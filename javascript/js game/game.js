// Array of three-letter words
var words = ["cat", "dog", "car", "sun", "sky"];

// Pick a random word
var randomWord = words[Math.floor(Math.random() * words.length)];

// Array to store the guessed letters
var guessedLetters = [];

// Variable to track the number of correct guesses
var correctGuesses = 0;

// Function to check if a letter is correct and update the word
function guessLetter() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value.toLowerCase();
    guessInput.value = "";

    if (guess.length !== 1) {
        alert("Please enter a single letter.");
        return;
    }

    if (guessedLetters.includes(guess)) {
        alert("You already guessed that letter.");
        return;
    }

    guessedLetters.push(guess);

    var wordContainer = document.getElementById("wordContainer");
    var messageContainer = document.getElementById("messageContainer");
    var previousGuessesTableBody = document.getElementById("previousGuessesTableBody");
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");

    if (randomWord.includes(guess)) {
        var updatedWord = "";
        for (var i = 0; i < randomWord.length; i++) {
            if (guessedLetters.includes(randomWord[i])) {
                updatedWord += randomWord[i];
                correctGuesses++;
            } else {
                updatedWord += "_";
            }
        }

        wordContainer.textContent = updatedWord;

        if (correctGuesses === randomWord.length) {
            messageContainer.textContent = "Congratulations! You guessed the word.";
            if (randomWord.length > 1) {
                image2.style.display = "block";
            } else {
                image1.style.display = "block";
            }
        } else {
            messageContainer.textContent = "Correct! Keep guessing.";
            if (correctGuesses === 1) {
                image1.style.display = "block";
            } else {
                image2.style.display = "block";
            }
        }
    } else {
        messageContainer.textContent = "Incorrect. Try again.";
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        cell.textContent = guess;
        row.appendChild(cell);
        previousGuessesTableBody.appendChild(row);
    }
}

// Add event listener to the guess button
var guessButton = document.getElementById("guessButton");
guessButton.addEventListener("click", guessLetter);
