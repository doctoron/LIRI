# LIRI node.js app
- Assignment week 10 
- LIRI node.js  
- UCF Coding BootCamp 
- Ronald Antonio

# Summary:
  LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.  This was 
  started during week 10 of UCF Coding Bootcamp.  The challenge was to create a LIRI bot, like 
  Apple's SIRI,but uses a command line: Language Interpretation and Recognition Interface.   
  Rather than a flashy front-end, LIRI explores the raw power of a command line node app.

The app takes in parameters returns data using the following format:
  * movie-this
  * spotify-this song
  * concert-this
  * do-what-it-says


## How to start:
  * Clone the LIRI repository
  * From Terminal or GitBash run the command 'npm install'
  * Run 'node liri.js' + one of the commands listed above i.e 'node liri.js movie-this <MOVIE NAME>
  

In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## What to expect:
1. node liri.js movie-this <MOVIE NAME>
  Displays the following:
      - Movie Title
      - Release Year
      - IMDB Rating
      - Country of origin
      - Language
      - Plot
      - Actors
      - Rotten Tomatoes Rating
      - Rotten Tomatoes URL
   
2. node liri.js spotify-this-song <SONG NAME>
  Displays the following:
      - Song Name
      - Artist
      - Song Preview URL
      - Album Name
  
3. node liri.js concert-this <BAND NAME>
  Displays the following:
      - Name of the venue
      - Venue location (city & country)
      - Latitude & Longitude
      - Date of the Event
      - Line up

4. node liri.js do-what-it-says
  Displays rext from random.txt and runs the song through the 'spotify-this-song' command.

## Technology utilized:
  * To retrieve the data that will power this app, the `axios` package was utilized to tap the 
    Bands-in-Town, Spotify and OMDB APIs. I found these Node packages crucial for this assignment.
  * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
  * [Axios](https://www.npmjs.com/package/axios)
    Axios to grab data from the [OMDB API](http://www.omdbapi.com) and 
    the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
  * [Moment](https://www.npmjs.com/package/moment)
  * [DotEnv](https://www.npmjs.com/package/dotenv)
  * IDE: Visual Studio Code 


### Additional Construction Instructions

* Navigate to the root of your project and run `npm init -y` &mdash; this will initialize a `package.json` file for your project. The `package.json` file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a `package.json` file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.

* Make a `.gitignore` file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.

```
node_modules
.DS_Store
.env
```
* Make a JavaScript file named `keys.js`.

* Inside keys.js your file will look like this:

```js
console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
```

* Next, create a file named `.env`, add the following to it, replacing the values with your API keys (no quotes) once you have them:

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```
* This file will be used by the `dotenv` package to set what are known as environment variables to the global `process.env` object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github &mdash; keeping our API key information private.

* If someone wanted to clone your app from github and run it themselves, they would need to supply their own `.env` file for it to work.
* It is useful to use a browser to see the 'lay of the land' for the objects:

**Good Luck!**
