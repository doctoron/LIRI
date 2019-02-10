```js
require("dotenv").config();
```
```js
  var keys = require("./keys.js");
```
```js
var spotify = new Spotify(keys.spotify);
```

* `concert-this`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`

// Do something with node-OMDB
// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
var axios = require("axios");

// We then run the request with axios module on a URL with a JSON
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);
// Do something with node-Spotify
// https://www.npmjs.com/package/spotify
// https://github.com/peol/node-spotify
var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data'
});

// TV Show  & Actor arguments passed to Axios get
var TV = require("./tv");

// Create a new TV object
let tv = new TV();

// Create search variables

// Grab search command line argument
let search = process.argv[2];

// Joining the remaining arguments since an actor or tv show name may contain spaces
let term = process.argv.slice(3).join(" ");

// console.log(term);
// console.log(search);

switch (search) {
  case 'show':
    if(term=!term){
      console.log("What show were you searching for?");
      break;
    }
    console.log(`Searching for show named ${term}`);
    tv.findShow(term);
    break;

  case 'actor':
  if(term=!term){
    console.log("Which actor were you searching for?");
    break;
  }
    console.log(`Searching for actor named ${term}`);
    tv.findActor(term);
    break;

  default:
    tv.findShow("Game of Thrones");
    console.log(`DEFAULT What are you searching for?`);
    break;
}