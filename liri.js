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

// Parse command line from array variables
// let cliText = process.argv;
let command = process.argv[2];
// console.log(`process.argv was fired in cliText ${cliText}`);

// Gather multi-word search item into a single string element with spaces between words
// searchItem = '';
// for (let i = 3; i < cliText.length; i++) {
//     if (i < cliText.length) {
//         searchItem += (cliText[i] + ' ')
//     }
// }
// console.log(searchItem);
// console.log(`'searchItem' was fired: ${searchItem}`);

// command = command.trim();
// console.log(command);
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
