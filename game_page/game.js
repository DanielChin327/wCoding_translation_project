

document.addEventListener('DOMContentLoaded', function() {
let answer ='';

const startButton = document.querySelector('#start_button')
const form = document.querySelector('form')
const input = document.querySelector('#input-area')
const submit = document.querySelector("#submit")
const output = document.querySelector('#output')
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

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = input.value.toLowerCase();
    if(text === answer) {
      output.innerText = `Correct! the answer was ${answer}!`
      counterUp();
    }
    else{
      output.innerText = `Incorrect....`
      counterReset()
    }
  })
})



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
