/* eslint-disable no-undef */

const $form = $('form');
const $input = $('#tweet-text');
const $counter = $('output');

$form.on('input', 'input:text', function() {

  const initialValue = 140;
  let counterValue = initialValue - $input.val().length;
  $counter.html(counterValue);
  if (counterValue < 0) {
    $counter.addClass("tweet-form__bottom__counter--negative");
  }
});

// JS implementation

// const form = document.querySelector('form');
// const input = document.getElementById('tweet-text');
// const counter = document.querySelector('output');


// form.addEventListener('input', function() {

//   // get current counter value
//   let counterValue = counter.value;
//   counterValue = 10;

//   // get user input in textfield
//   const userInput = input.value;

//   // decrease the counter
//   counter.innerHTML = counterValue -= userInput.length;

//   // if counter value < 0, display red

//   if (counterValue > 0) {

//     counter.style.content = "/form.css";
//   }

// });









