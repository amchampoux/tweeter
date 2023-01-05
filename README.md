# Tweeter Project

Tweeter is a single-page Twitter clone, where users can create short posts of up to 140 characters and have them append to the main page. Posts are sequential, with the most recent posts appearing at the top of the page. To do so, Tweeter fetches a list of posts from a simplified ‘server’ and allows users to add posts to this list dynamically. 

This app is build with Javascript, jQuery and AJAX on the front-end, and with Express and Node on the back-end. 

# Final Product

## Core Features
- Start by writing a tweet in the tweet box and clicking on "Tweet". This will "Submit" the tweet to the back-end via an AJAX request.
- A successful POST request will then GET the tweet object back from the back-end and update the feed without having to refresh the page. 
- An error message will be displayed if an empty tweet or a tweet longer than 140 characters is being submitted. 
- This app uses responsive design and will adjust depending on the screen size. 

## Screenshots

**Main page form**

!["Screenshot of main page form"](https://github.com/amchampoux/tweeter/blob/master/docs/desktop_tweet_form.gif)

**Error displayed on too long tweet**

!["Screenshot of error displayed on too long tweet"](https://github.com/amchampoux/tweeter/blob/master/docs/desktop_long_tweet.png)

**Main page on tablet vieww**

!["Screenshot of main page on tablet view"](https://github.com/amchampoux/tweeter/blob/master/docs/tablet_scroll.gif)

## Getting Started
1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. 
3. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser and write a tweet!

## Dependencies
- Express
- Node 5.10.x or above
- nodemon
- chance
- md5

