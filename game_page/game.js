let answer = ''; // Declare the answer variable globally
let timer; // Declare timer variable globally to manage it properly
let highScore = 0; // Declare high score variable globally
let timerDisplay; // Declare timerDisplay globally to access it within functions

document.addEventListener('DOMContentLoaded', function() {
  timerDisplay = document.querySelector('#timer_display');
  const startButton = document.querySelector('#start_button');
  const form = document.querySelector('form');
  let resetButton = document.querySelector("#reset_button");

  // How to save high score
  if (localStorage.getItem('highScore')) {
    highScore = parseInt(localStorage.getItem('highScore'));
    document.querySelector('#high_score').innerText = highScore;
  }

  startButton.addEventListener('click', makeQuestion);
  form.addEventListener('submit', answerQuestion);

  resetButton.addEventListener('click', function() {
    localStorage.removeItem('highScore'); // Remove high score from local storage
    highScore = 0;
    document.querySelector('#high_score').innerText = highScore; // Update the displayed high score
  });
});

function makeQuestion() {
  if (timer != 0) {
    clearInterval(timer); // Clear any existing timer
  }
  let count = 5; // Reset the count (or set it to your desired duration)
  timerDisplay.innerText = "00:05"; // Reset the display
  startTimer(count, timerDisplay);
  fetch('/game_page/al_bhed.json')
    .then(response => response.json())
    .then(data => {
      let questionChoice = data[randomNumber(data)];
      const questionClass = document.querySelector('.question');
      questionClass.innerText = questionChoice.alBhed;
      answer = questionChoice.english; // Update the global answer variable
      document.querySelector('#input-area').focus(); // Auto sends the user to the text-input area to start typing right away.
    });
}

function answerQuestion(event) {
  event.preventDefault();
  const questionClass = document.querySelector('.question');
  let text = questionClass.innerText;
  let userAnswer = document.querySelector('#input-area').value;
  const output = document.querySelector('#output');

  if (text.length == 0) {
    output.innerText = 'Game has not started. Press the Word Button';
  } else if (answer === userAnswer) { // Compare with the global answer variable
    output.innerText = `Correct! The answer was ${answer}!`;
    counterUp();
    makeQuestion();
    document.querySelector('#input-area').value = ''
  } else {
    output.innerText = `${answer} was incorrect....`;
    counterReset();
    document.querySelector('#input-area').value = ''
  }
}

function randomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function counterUp() {
  let counter = document.querySelector('.counter');
  counter.innerText = parseInt(counter.innerText) + 1;

  if (parseInt(counter.innerText) > highScore) {
    highScore = parseInt(counter.innerText);
    document.querySelector('#high_score').innerText = highScore;
    localStorage.setItem('highScore', highScore); // Save high score to local storage
  }
}

function counterReset() {
  let counter = document.querySelector('.counter');
  counter.innerText = 0;
}

function startTimer(duration, display) {
  let timerDuration = duration;
  let minutes, seconds;
  timer = setInterval(function() { // Assign to global timer variable
    minutes = parseInt(timerDuration / 60, 10);
    seconds = parseInt(timerDuration % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = minutes + ":" + seconds;

    if (--timerDuration < 0) {
      clearInterval(timer);
      alert('Time is up!');
      counterReset();
    }
  }, 1000);
}
