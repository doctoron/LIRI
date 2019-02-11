require("dotenv").config();

// require npm omdb-client
// require axios
// const axios = require('axios');

let cliText = '';
for (i = 2; i < process.argv.length; i++) {
    cliText += (process.argv[i] + ' ');
};
console.log(cliText);

switch (command) {
    case 'movie-this':
        axios.get(`https://www.omdbapi.com/?t=${cliText}&y=&plot=short&apikey=trilogy`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        break;

    case 'spotify-this-song':
        console.log(`spotify-this was fired`)
        // spotifyThis();

        axios.get(`https://api.spotify.com/v1/searchq=${clilText}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

        break;

    case 'concert-this':
        console.log('concert-this was fired')
        // concertThis();

        axios.get(`${bandsQueryURL}${term}/events?${bandsKey}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

        break;

    case 'do-what-it-says':
        console.log(`do-what-it-says was just fired`);
        // justDoIt();

        break;

        default:
        console.log(`What are you trying to do?`);
        break;
    }
    