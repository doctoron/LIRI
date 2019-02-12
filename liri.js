require("dotenv").config();
// Use key data from keys.js
let keys = require('./keys.js');
let request = require('request');
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let searchItem = process.argv.slice(3).join(' '); 
let command = process.argv[2];
let bandsintown = require('bandsintown')('faswega');
let axios = require('axios');
let moment = require('moment');
let fs = require('fs');

bandsintown
    .getArtistEventList(searchItem)
    .then(function (events) {
        // return array of events
    });


// console.log(`process.argv was fired in cliText ${command}`);
// console.log(`'searchItem' was fired: ${searchItem}`);

let choice = function (command, searchItem) {
    switch (command) {
        case 'movie-this':
            console.log(`movie-this command was fired`)
            omdbData(searchItem);

            break;

        case 'spotify-this-song':
            console.log(`spotify-this was fired`)
            spotifyData(searchItem);

            break;

        case 'concert-this':
            console.log('concert-this was fired')
            concertData();

            break;

        case 'do-what-it-says':
            console.log(`do-what-it-says was just fired`);
            // justDoIt();

            break;

        default:
            console.log(`What are you trying to do?`);

            break;
    }
}

let concertData = (searchItem) => {

    axios.get(`https://rest.bandsintown.com/artists/${searchItem}?app_id=faswega`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
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
let doThis = function (arg1, arg2) {
    choice(arg1, arg2);
}
doThis(command, searchItem);
