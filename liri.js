/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Assignment: LIRI node.js  
UCF Coding BootCamp
Ronald Antonio
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

require("dotenv").config();
// Use key data from keys.js
let keys = require('./keys.js');
let inquirer = require('inquirer');
let axios = require('axios');
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let moment = require('moment');
let fs = require('fs');
let command = process.argv[2];
let searchItem = process.argv.slice(3).join(' ');
let defaultMovie = 'Mr. Nobody';
let defaultSong = 'The Sign'


let choice = function (command, searchItem) {
    console.log(command, searchItem);

    switch (command) {
        case 'movie-this':
            if (searchItem === " ") {
                omdbData(defaultMovie);
            } else {
                omdbData(searchItem);
            }
            break;

        case 'spotify-this-song':
            if (searchItem === " ") {
                spotifyData(defaultSong);
            } else {
                spotifyData(searchItem);
            }
            break;

        case 'concert-this':
            if (searchItem === " ") {
                console.log('What band do you wish to follow?')
            } else {
                concertData(searchItem);
                break;
            }

        case 'do-what-it-says':
            console.log("Stuck?  Perhaps this will stimulate your thinking?")
            justDoIt();
            break;

        default:
            console.log(`What are you trying to do?`);
            break;

    }
}

let concertData = (searchItem) => {
    let bandsURL = `https://rest.bandsintown.com/artists/${searchItem}/events?app_id=codingbootcamp`;
    console.log(bandsURL);
    axios.get(bandsURL).then(function (response) {
        console.log(`Seaching for concerts by ${searchItem}`)
        let bandData = response.data;
        for (let i = 0; i < bandData.length; i++) {
            let bandEvents = bandData[i];
            let concerts = [
                'Name of the venue: ' + bandEvents.venue.name,
                'Venue location: ' + bandEvents.venue.city + " " + bandEvents.venue.country,
                'Latitude & Longitude: ' + bandEvents.venue.latitude + " & " + bandEvents.venue.longitude,
                'Date of the Event: ' + moment(bandEvents.venue.datetime).format("MM/DD/YYYY"),
                'Line up: ' + bandEvents.lineup
            ]
            console.log(concerts);
        }
    })
        .catch(function (error) {
            console.log(error);
        });
};

let spotifyData = (song) => {
    spotify
        .search({ type: 'track', query: song })
        .then(function (response) {
            let song = response.tracks.items[0];
            let songItems = [
                'Artist: ' + song.album.artists[0].name,
                'Song Name: ' + song.name,
                'Song Preview: ' + song.preview_url,
                'Album: ' + song.album.name
            ]
            console.log(songItems);

        })
        .catch(function (err) {
            console.log('Error occurred: ' + err);
        });
}


let omdbData = (movie) => {
    let omdbURL = `http://www.omdbapi.com/?t=$${movie}&plot=short&tomatoes=true&apikey=trilogy`;

    axios.get(omdbURL)
        .then(function (response) {
            let body = response.data;
            console.log(body.Title);
            newFunction(body);
        })
        .catch(function (error) {
            console.log(error);
        });

}

// just-do-what-it-says
let justDoIt = () => {
    spotifyData(defaultMovie);
}

let doThis = function (command, searchItem) {
    choice(command, searchItem);
}

// Let's begin here
doThis(command, searchItem);

function newFunction(body) {
    console.log("Title: " + body.Title);
    console.log("Release Year: " + body.Year);
    console.log("IMdB Rating: " + body.imdbRating);
    console.log("Country: " + body.Country);
    console.log("Language: " + body.Language);
    console.log("Plot: " + body.Plot);
    console.log("Actors: " + body.Actors);
    console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
    console.log("Rotten Tomatoes URL: " + body.tomatoURL);

}

// inquirer
//     .prompt([
//         // Create the scope of user friendly choices
//         {
//             type: "list",
//             message: "What is thy bidding?",
//             choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"],
//             name: "command"
//         },
//         // Create basic text prompt.
//         {
//             type: "input",
//             message: "What shall I search for you? ",
//             name: "searchItem"
//         },
//         //  Require user confirmation
//         {
//             type: "confirm",
//             message: "Are you sure: ",
//             name: "confirm",
//             default: true
//         }
//     ])
//     .then(function (userAnswer) {
//         //  Display inquirerResponse upon confirmation
//         if (userAnswer.confirm) {
//             console.log('command in inquirer ' + userAnswer.command);
//             console.log('searchItem from inquirer ' + userAnswer.searchItem);
//             command = userAnswer.command;
//             searchItem = userAnswer.searchItem;
//             choice(command, searchItem);
//         }
//         else {
//             prompts.complete();
//             console.log("It is always one's privilege to serve!");
//         }
//     })