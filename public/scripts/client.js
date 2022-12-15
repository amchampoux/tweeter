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
        <header class="tweet__header">
          <div class="tweet__header__user">
            <img class="tweet__header__user__image" src=${tweetData.user.avatars}> 
            <label class="tweet__header__user__name">${tweetData.user.name}e</label>
          </div>
          <label class="tweet__header__user__alias">${tweetData.user.handle}</label>
        </header>
        <p class="tweet__tweet">${escape(tweetData.content.text)}</p>
        <hr>
        <footer class="tweet__footer">
          <label class="tweet__footer__date">${tweetData.created_at}</label>
          <div class="tweet__footer__social">
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
      renderTweets(tweets);
    });
  };

  loadtweets();

  $form.on('submit', (event) => {
    event.preventDefault();
    const data = $form.serialize();
    console.log(data);

    if (data.length > 140) {
      event.preventDefault();
      alert('Your tweet is too long!');
    } else {
      $input.val('');
      $.post('/tweets', data, (response) => {
        console.log('post response:', response);

        loadtweets();
      });
    }
  });
});