// Read and set environment variables
// require("dotenv").config();

// let keys = require("./keys.js");
// let moment = require('moment');
// let Spotify = require('node-spotify-api');
// let spotify = new Spotify(keys.spotify);
// let searchItem = process.argv[2];
// let term = process.argv.slice(3).join(" ");
// let movieQueryURL = "https://www.omdbapi.com/?t=";
// let movieKey = "&y=&plot=short&apikey=trilogy";
// let bandsQueryURL = "https://rest.bandsintown.com/artist/";
// let bandsKey = "app_id=codingbootcamp";
// let fs = require('fs');

// let commandLine = '';
// for (i = 0; i, process.argv.length; i++) {
//   commandLine += (process.argv[i] + '');
// };
// for (i = 3; i, process.argv.length; i++) {
//   commandLine += (process.argv[i] + '');
// };

// searchItem = searchItem.trim();

// switch (command) {
//   case 'movie-this':
//     console.log('movie-this was fired')
    // movieThis();
  //   break;

  // case 'concert-this':
  //   console.log('concert-this was fired')
    // concertThis();
    // console.log(`${bandsQueryURL}${term}/events?${bandsKey}`);
  //   break;

  // case 'spotify-this-song':
  //   console.log(`spotify-this was fired`)
  //   // spotifyThis();
  //   break;

  // case 'do-what-it-says':
  //   console.log(`do-what-it-says was just fired`);
    // justDoIt();
//     break;

//   default:
//     console.log(`What are you trying to do?`);
//     break;
// }

// Do something with node-OMDB
// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
// let axios = require("axios");
// movieThis = () => {
//   axios.get(`${movieQueryURL}${term}${movieKey}`).then(
//     function (response) {
//       // Then we print out the imdbRating
//       console.log(`The movie's rating is: ${response.data.imdbRating}`);
//       console.log(`${movieQueryURL}${term}${movieKey}`);
//       dataLine1 = `Title: ${JSON.parse(body).Title}`;
//       dataLine2 = `Release Year:`
//       dataLine3
//       dataLine4
//       dataLine5
//       dataLine6
//       dataLine6
//       dataLine8


//     })
// };

// concertThis = () => {
//   if (!searchItem) {
//     searchItem = "Earth Wind and Fire";
//   }
//   requestAnimationFrame(`https://rest.bandsintown.com/artist/${searchItem}
//   /events?app_id=codingbootcamp, function (error, response, bool)`);
//   if (JSON.parse(body)[0] === undefined) {
//     console.log("No upcoming shows found.");
//   } else {
//     dataLine1 = searchItem + " playing at " + JSON.parse(body)[0].venue
//     ", " + JSON.parse(body)[0].venue.city + JSON.parse(body)[0].
//       venue.region + ", " + JSON.parse(body)[0].venue.country;
//     dataLine2 = moment(JSON.parse(body)[0].datetime).format('MM/DD/YYYY');
//     console.log(dataLine1);
//     console.log(dataLine2);
//     logFile();
//   }
// }


// Do something with node-Spotify
// https://www.npmjs.com/package/spotify
// https://github.com/peol/node-spotify
// spotifyThis = () => {
//   if (!searchItem) {
//     searchItem = "The Sign by Ace of Base"
//   }
// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)
// axios.get(`http://api.spotify.com/v1/search? q=${searchItem}&type=artist`).then(
//   function(response) {
//     // If the axios was successful...
//     // Then log the body from the site!
//     console.log(response.data);
//   },
  // Spotify
  // GET https://api.spotify.com/v1/search
  // spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function (err, data) {
  //   if (err) {
  //     console.log('Error occurred: ' + err);
  //     return;
  //   }
    // Do something with 'data'
    // dataLine1 = "\nArtist: " + JSON.stringify(response.tracks.items[0].artist[0].name);
    // dataLine2 = "\nSong: " + JSON.stringify(response.tracks.items[0].name.song);
    // dataLine3 = "\nSpotify sample: " + JSON.stringify(response.tracks.items
    //   .album.artist[0].external_urls.spotify);
    // dataLine4 = "\nAlbum: " + JSON.stringify(response.tracks.items[0].albums);
    // console.log(dataLine1);
    // console.log(dataLine2);
    // console.log(dataLine3);
    // console.log(dataLine4);
    // logFile();
  // });
// }
require("dotenv").config();
// Use key data from keys.js
let keys = require('./keys.js');
let request = require('request');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
 
let fs = require('fs');
let axios = require('axios');
let moment = require('moment');
let searchItem = process.argv.slice(3).join(' ');

// Parse argument to pass to switch-case 
let command = process.argv[2];
// console.log(`process.argv was fired in cliText ${command}`);
// console.log(`'searchItem' was fired: ${searchItem}`);

var choice = function (command, searchItem) {
    switch (command) {
        case 'movie-this':
            console.log(`movie-this command was fired`)
            omdbData(searchItem);

            break;

        case 'spotify-this-song':
            console.log(`spotify-this was fired`)
            spotifyData(searchItem);

            break;


        //     case 'concert-this':
        //         console.log('concert-this was fired')
        //         // concertThis();

        //         break;

        //     case 'do-what-it-says':
        //         console.log(`do-what-it-says was just fired`);
        //         // justDoIt();

        //         break;

        //     default:
        //         console.log(`What are you trying to do?`);

        //         break;
        // }
    }
}
let spotifyData = (searchItem) => {

    spotify.search({ type: 'track', query: searchItem }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.artists);
        console.log(data.album);
        console.log(data.tracks);
    });

}


let omdbData = (searchItem) => {
    var omdbURL = "http://www.omdbapi.com/?t=$" + searchItem + "&plot=short&tomatoes=true&y=&plot=short&apikey=trilogy";

    axios.get(omdbURL)
        .then(function (response) {
            // console.log(response);
            var body = response.data;
            // console.log(body.Title);
            console.log("Title: " + body.Title);
            console.log("Release Year: " + body.Year);
            console.log("IMdB Rating: " + body.imdbRating);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
            console.log("Rotten Tomatoes URL: " + body.tomatoURL);

        })
        .catch(function (error) {
            console.log(error);
        });

}
var doThis = function (arg1, arg2) {
    choice(arg1, arg2);
}
doThis(command, searchItem);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function omdbData(movie){
  var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true';

  request(omdbURL, function (error, response, body){
    if(!error && response.statusCode == 200){
      var body = JSON.parse(body);

      console.log("Title: " + body.Title);
      console.log("Release Year: " + body.Year);
      console.log("IMdB Rating: " + body.imdbRating);
      console.log("Country: " + body.Country);
      console.log("Language: " + body.Language);
      console.log("Plot: " + body.Plot);
      console.log("Actors: " + body.Actors);
      console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
      console.log("Rotten Tomatoes URL: " + body.tomatoURL);

      //adds text to log.txt
      fs.appendFile('log.txt', "Title: " + body.Title);
      fs.appendFile('log.txt', "Release Year: " + body.Year);
      fs.appendFile('log.txt', "IMdB Rating: " + body.imdbRating);
      fs.appendFile('log.txt', "Country: " + body.Country);
      fs.appendFile('log.txt', "Language: " + body.Language);
      fs.appendFile('log.txt', "Plot: " + body.Plot);
      fs.appendFile('log.txt', "Actors: " + body.Actors);
      fs.appendFile('log.txt', "Rotten Tomatoes Rating: " + body.tomatoRating);
      fs.appendFile('log.txt', "Rotten Tomatoes URL: " + body.tomatoURL);

    } else{
      console.log('Error occurred.')
    }
    if(movie === "Mr. Nobody"){
      console.log("-----------------------");
      console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      console.log("It's on Netflix!");

      //adds text to log.txt
      fs.appendFile('log.txt', "-----------------------");
      fs.appendFile('log.txt', "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      fs.appendFile('log.txt', "It's on Netflix!");
    }
  });

}

function doThing(){
  fs.readFile('random.txt', "utf8", function(error, data){
    var txt = data.split(',');

    spotifySong(txt[1]);
  });
}