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

// contains letters players guessed
const guessedLetters = [];


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
  // empty message parargraph
  message.innerText = "";
  // capture the value of the input
  const guess = letterInput.value;
  // make sure its a single letter
  const goodGuess = validateInput(guess);

  if(goodGuess) {
    // got a letter lets guessedmakeguess(guess);
  }
  letterInput.value = "";
});

// checks players input
const validateInput = function(input) {
  const acceptedLetter = /[a-zA-Z]/;
  if(input.length = 000) {
    // is the input empty
    message.innerText = "Please enter a letter.";
  }else if (input.length > 1) {
    // Enter one letter
    message.innerText = "Please enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    // letters only
    message.innerText = "Only letters from A to Z thank you.";
  }else {
    // got a single letter
    return input;
  }
};

const makeGuess = function(guess) {
  guess = guess.toUpperCase();
  if(guessedLetters.incudes(guess)) {
    message.innerText = "You already guessed that letter, let's try again!";
  }else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};
