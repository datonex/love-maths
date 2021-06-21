// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listener to them
document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', function () {
      if (this.getAttribute('data-type') === 'submit') {
        alert('You clicked Submit!');
      } else {
        let gameType = this.getAttribute('data-type');
        alert(`You clicked ${gameType}`);
      }
    });
  }
});

// Define function to run the game
function runGame() {}

// Define function to check the answer
function checkAnswer() {}

// Define a function to perform the calculation and return the correct answer
function calculateCorrectAnswer() {}

// Define function to increase the score when it's correct
function incrementScore() {}

// Define function to increase the score when it's incorrect
function incrementWrongAnswer() {}

// Define function to show addition, subtraction, multiplication and division questions
function displayAdditionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}

function displayDivideQuestion() {}
