/* eslint-disable no-undef */

$(document).ready(()=> {

  const $form = $('form');
  const $input = $('#tweet-text');
  const $counter = $('output');

  $form.on('input', 'input:text', function(e) {
    const initialValue = 140;
    let counterValue = initialValue - $input.val().length;
    $counter.html(counterValue);
    if (counterValue < 0) {
      $counter.addClass("tweet-form__bottom__counter--negative");
    }
  });
});