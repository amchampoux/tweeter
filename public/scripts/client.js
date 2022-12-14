/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(()=> {

  const $form = $('form');

  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const renderTweets = function(tweets) {
    let output;
    // loops through tweets
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      output = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets-container').append(output);
    }
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
        <p class="tweet__tweet">${tweetData.content.text}</p>
        <hr>
        <footer class="tweet__footer">
          <label class="tweet__footer__date">${tweetData.created_at}o</label>
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

  // renderTweets(tweetData);

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
    $.post('/tweets', data, (response) => {
      console.log('post response:', response);
    });
  });



});