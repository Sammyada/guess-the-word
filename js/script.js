// Unorded list where players letters will appear
const guessedLettersElement = document.querySelector(".guess-letters");
// The button with the "guess" text
const guessLetterButton = document.querySelector(".guess");
// The text input where player will guess the letter
const letterInput = document.querySelector(".letter");
// Empty paragraph where the word will appear
const wordInProgress = document.querySelector(".word-in-progress");
// Paragragh where reamaining guesses with display
const remainingGuessElement = document.querySelector(".remaining");
// The span inside the paragragh
const  reamaingGuessSpan = document.querySelector(".Remaining span");
// Empty paragraph where messages will appear when letter is guessed
const message = document.querySelector(".message");
// Hidden button with play again promortion
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

// Display circles symbol as placeholder
const placeholder = function(word) {
  const placeholderLetters = [];
  for( const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function(e) {
  e.preventDefault(); // prevent reloading behavior
  // capture the value of the inout
  const guess = letterInput.value;
  console.log(guess);
  letterInput.value = "";
});
