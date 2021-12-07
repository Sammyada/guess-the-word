// Unorded list where players letters will appear
const guessedLettersElement = document.querySelector(".guessed-letters");
// The button with the "guess" text
const guessLetterButton = document.querySelector(".guess");
// The text input where player will guess the letter
const letterInput = document.querySelector(".letter");
// Empty paragraph where the word will appear
const wordInProgress = document.querySelector(".word-in-progress");
// Paragragh where reamaining guesses with display
const remainingGuessesElement = document.querySelector(".remaining");
// The span inside the paragragh
const remainingGuessesSpan = document.querySelector(".remaining span");
// Empty paragraph where messages will appear when letter is guessed
const message = document.querySelector(".message");
// Hidden button with play again promortion
const playAgainButton = document.querySelector(".play-again");

let word = "magnolia";
// contains letters players guessed
const guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function () {
  const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    const wordArray = words.split("\n");
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholder(word);
};

// fire off game
getWord();


// Display circles symbol as placeholder
const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    // console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault(); // prevent reloading behavior
  // empty message parargraph
  message.innerText = "";
  // capture the value of the input
  const guess = letterInput.value;
  // make sure its a single letter
  const goodGuess = validateInput(guess);

  if (goodGuess) {
    // got a letter lets guessedmakeguess(guess);
    makeGuess(guess);
  }
  letterInput.value = "";
});

// checks players input
const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    // is the input empty?
    message.innerText = "Please enter a letter.";
  } else if (input.length > 1) {
    // Enter one letter
    message.innerText = "Please enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    // letters only
    message.innerText = "Only letters from A to Z thank you.";
  } else {
    // got a single letter
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter, let's try again!";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    updateGuessesRemaining(guess);
    showGuessedLetters();
    updateWordInProgress(guessedLetters);
  }
};

// show guessed letters
const showGuessedLetters = function() {
  guessedLettersElement.innerHTML = "";
  for (const letter of guessedLetters) {
    const li = document.createElement("li");
    li.innerText = letter;
    guessedLettersElement.append(li);
  }
};

const updateWordInProgress = function (guessedLetters) {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  const revealWord = [];
  for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
      revealWord.push(letter.toUpperCase());
   } else {
      revealWord.push("●");
    }
  }
  //console.log(revealWord);
wordInProgress.innerText = revealWord.join("");
checkIfWin();
};

const updateGuessesRemaining = function (guess) {
  const upperWord = word.toUpperCase;
  if (upperWord.includes(guess)) {
    // sorry, you lose a chance
    message.innerText = `Sorry this word has no ${guess}.`;
    remainingGuesses -= 1;
  } else {
    message.innerText = `Good guess! The word has the letter ${guess}.`;
  }

if (remainingGuesses === 0) {
  message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
  } else if (remainingGuesses === 1) {
  remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
  } else {
  remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
  }
};


const checkIfWin = function () {
  if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
  }
};
