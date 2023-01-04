/* eslint-disable func-style */
/* eslint-disable no-undef */

$(document).ready(()=> {

  const $form = $('form');
  const $input = $('#tweet-text');
  const $counter = $('output');
  const $top = $('#back-to-top');
  const $writeIcon = $('#write-icon');
  const $nav = $('nav');

  $form.on('input', '#tweet-text', function(e) {
    const initialValue = 140;
    let counterValue = initialValue - $input.val().length;
    $counter.html(counterValue);
    if (counterValue < 0) {
      $counter.css("color", "#f08080");
    } else {
      $counter.css("color", "#545149");
    }
  });

  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $top.css("display", "block");
      $nav.addClass("nav--background");

    } else {
      $top.css("display", "none");
      $nav.removeClass("nav--background");
    }
  }

  $top.click(function() {
    $form.css("display", "flex");
    $form.slideDown("slow");
    $(document.documentElement).animate({ scrollTop: 0 }, 800);
    $writeIcon.toggleClass("down");
    $input.focus();
  });
});
