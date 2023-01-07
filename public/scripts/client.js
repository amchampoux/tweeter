/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(()=> {
  const $form = $('form');
  const $input = $('#tweet-text');
  const $tweetContainer = $('#tweets-container');
  const $error = $('#error__box');
  const $errorText = $('#error__box__text');
  const $counter = $('output');
  const $writeIcon = $('#write-icon');
  const $tweetPlaceholder = $('.tweet--placeholder');
  
  const renderTweets = function(tweets) {
    
    $tweetContainer.empty();
    
    let output;
    // loops through tweets
    for (let tweet of tweets) {
      tweet.created_at = timeago.format(tweet.created_at);
      // calls createTweetElement for each tweet
      output = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets-container').prepend(output);
    }
  };

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweetData) {
    let $tweet = `
      <article class="tweet">
        <div class="tweet__header">
          <div class="tweet__user">
            <img class="tweet__userImage" alt="Profile picture" src=${tweetData.user.avatars}> 
            <label class="tweet__userName">${tweetData.user.name}e</label>
          </div>
          <label class="tweet__userAlias">${tweetData.user.handle}</label>
        </div>
        <p class="tweet__tweet">${escape(tweetData.content.text)}</p>
        <hr>
        <footer class="tweet__footer">
          <label class="tweet__date">${tweetData.created_at}</label>
          <div class="tweet__social">
            <i class="fa-brands fa-square-facebook fa-sm"></i>
            <i class="fa-solid fa-share-from-square fa-sm"></i>
            <i class="fa-solid fa-heart fa-sm"></i>
          </div>
        </footer>
      </article>
  `;
    return $tweet;
  };

  const loadtweets = function() {
    $.get('/tweets', (tweets) => {
      $tweetPlaceholder.addClass("tweet--hidden");
      renderTweets(tweets);
    });
  };

  loadtweets();

  $writeIcon.click(function() {
    $form.css("display", "flex");
    $form.slideDown();
  },
  function() {
    $(this).toggleClass("down");
    $form.slideToggle(400, () => {
      $input.focus();
    });
  });

  // Display article on post submit
  $form.on('submit', (event) => {
    event.preventDefault();
    const data = $form.serialize();
    // Display error banner if post not valid or display article
    const longTextError = 'Your text is too long! Please respect the limit of 140 characters.';
    const noTextError = 'You need to enter a tweet.';

    if ($input.val().length > 140) {
      $error.css("display", "flex");
      $errorText.html(longTextError);
      $error.slideDown();
      event.preventDefault();
    } else if ($input.val().length < 1) {
      $error.css("display", "flex");
      $errorText.html(noTextError);
      $error.slideDown();
      event.preventDefault();
    } else {
      $input.val('');
      $counter.val('140');
      $.post('/tweets', data, (response) => {
        console.log('post response:', response);
        loadtweets();
        
      });
      $error.slideUp(150);
    }
  });
});


