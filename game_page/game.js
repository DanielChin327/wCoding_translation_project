

document.addEventListener('DOMContentLoaded', function() {
let answer ='';

const startButton = document.querySelector('#start_button')
const form = document.querySelector('form')
const input = document.querySelector('#input-area')
const submit = document.querySelector("#submit")

const counter = document.querySelector('.counter')

startButton.addEventListener('click', function(){
  fetch('/game_page/al_bhed.json')
  .then(response=>response.json())
  .then(data =>{
    let questionChoice = (data[randomNumber(data)])
    const questionClass = document.querySelector('.question')
    questionClass.innerText = questionChoice.alBhed
    answer = questionChoice.english
  })
})

form.addEventListener('submit', answerQuestion())

})



function answerQuestion() {
    const questionClass = document.querySelector('.question')
    text = questionClass.innerText
    const output = document.querySelector('#output')

    if (questionClass.innerText.length == 0) {
      output.innerText = 'Game has not started. Press the Start Button'
    }
    else if(text === answer) {
      output.innerText = `Correct! the answer was ${answer}!`
      counterUp();
    }
    else{
      output.innerText = `Incorrect....`
      counterReset()
    }
  }

function randomNumber (array) {
  return Math.floor(Math.random() * array.length)
}

function counterUp() {
  let counter = document.querySelector('.counter')
  counter.innerText ++
}

function counterReset() {
  let counter = document.querySelector('.counter')
  counter.innerText = 0;
}

function timer() {
  let count = 10;
  count
}
