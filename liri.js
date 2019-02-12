require("dotenv").config();
// Use key data from keys.js
let keys = require('./keys.js');
let axios = require('axios');
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let moment = require('moment');
let fs = require('fs');
let command = process.argv[2];
let searchItem = process.argv.slice(3).join(' ');
// let defaultMovie = "Mr. Nobody";
// let defaultSong = 'Happy'
// let bandsintown = require('bandsintown')('faswega');
// let omdbApi = './keys.apiKey'
// let inquirer = require('inquirer');
// let request = require('request');


let choice = function (command, searchItem) {
    console.log(command, searchItem);

    switch (command) {
        case 'movie-this':
        if (searchItem === " ") {
            console.log("Tell me the name of your movie?")
                break;
            } else {
                omdbData(searchItem);
                break;
            }

        case 'spotify-this-song':
            if (searchItem === " ") {
                console.log("Tell me the name of your song?")
                break;
            } else {
                spotifyData(searchItem);
                break;
            }

        case 'concert-this':
            if (searchItem === " ") {
                console.log('What band do you wish to follow?')
                break;
            } else {
                concertData(searchItem);
                break;
            }

        case 'do-what-it-says':
            if (searchItem === " ") {
                console.log("Tell me the name of your song?")
                break;
            } else {
                justDoIt();
                break;
            }

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
            let bandEvents = bandData[0];
            let concerts = [
                'Name of the venue: ' + bandEvents.venue.name,
                'Venue location: ' + bandEvents.venue.city + bandEvents.venue.region,
                'Date of the Event: ' + moment(bandEvents.venue.datetime).format("MM/DD/YYYY")
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
            // console.log(body.Title);
            newFunction(body);
        })
        .catch(function (error) {
            console.log(error);
        });

}

let doThis = function (arg1, arg2) {
    choice(arg1, arg2);
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
