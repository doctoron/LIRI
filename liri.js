// Read and set environment variables
require("dotenv").config();

let keys = require("./keys.js");
let fs = require('fs');
let moment = require('moment');
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let search = process.argv[2];
let term = process.argv.slice(3).join(" ");
let movieQueryURL = "https://www.omdbapi.com/?t=";
let movieKey = "&y=&plot=short&apikey=trilogy";
let bandsQueryURL = "https://rest.bandsintown.com/artist/";
let bandsKey = "app_id=codingbootcamp";

let commandLine = '';
for (i = 0; i, process.argv.length; i++) {
  commandLine += (process.argv[i] + '');
};
for (i = 3; i, process.argv.length; i++) {
  commandLine += (process.argv[i] + '');
};

searchItem = searchItem.trim();

switch (command) {
  case 'movie-this':
    movieThis();
    console.log('movie-this was fired')
    break;

  case 'concert-this':
    concertThis();
    console.log('concert-this was fired')
    // console.log(`${bandsQueryURL}${term}/events?${bandsKey}`);
    break;

  case 'spotify-this-song':
    spotifyThis();
    console.log(`spotify-this was fired`)
    break;

  case 'do-what-it-says':
    justDoIt();
    console.log(`do-what-it-says was just fired`);
    break;

  default:
    console.log(`What are you trying to do?`);
    break;
}

// Do something with node-OMDB
// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
let axios = require("axios");
movieThis =() =>{
axios.get(`${movieQueryURL}${term}${movieKey}`).then(
  function (response) {
    // Then we print out the imdbRating
    console.log(`The movie's rating is: ${response.data.imdbRating}`);
    console.log(`${movieQueryURL}${term}${movieKey}`);
  }
)};


// Do something with node-Spotify
// https://www.npmjs.com/package/spotify
// https://github.com/peol/node-spotify
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function (err, data) {
  if (err) {
    console.log('Error occurred: ' + err);
    return;
  }

  // Do something with 'data'
});
