require('dotenv').config();

const keys = require('./key.js');

const axios = require('axios');

const moment = require('moment');

const Spotify = require('node-spotify-api');

// const spotify = new Spotify(keys.spotify)
var spotify = new Spotify({
    id: "283566616ce24e5c88c457bdc4fd7a94",
    secret: "f95f7c75973546d2ac9b4e4d5a31a6d8"
});

const fs = require(`fs`);





let arguments = process.argv;
let input = process.argv[2];

let user = '';
    for(let i = 3; i < arguments.length; i++) {
        if(i > 3 && i < arguments.length) {
            user = `${user}+${arguments[i]}`;
        }
        else {
            user += arguments[i];
        }
    }


switch (input) {
    case 'concert-this':
        bandsInTown(user);
        break;

    case 'spotify-this-song':
        spotSong(user);
        break;

    case 'movie-this':
        movieInfo(user);
        break;

    case 'do-what-it-says':
        getRandom();
        break;

    default:
        console.log(`
   Please enter a valid command:
    'concert-this' 
    'movie-this'
    'spotify-this-song' 
    'do-what-it-says'!
    `)
}


function bandsInTown(user) {
    if (!user) {
        user = `Rezz`;
        console.log(`Go to a rave!
        `);
    }

    let concertUrl = `https://rest.bandsintown.com/artists/${user}/events?app_id=codingbootcamp`;

    axios.get(concertUrl).then(
        function (response) {
            if (response.data[0] === undefined) {
                console.log(`No upcoming events`);
            }
            else {
                console.log(`Artist: ${response.data[0].lineup[0]}`);
                console.log(`Venue: ${response.data[0].venue.name}`);
                console.log(`Location: ${response.data[0].venue.city} ${response.data[0].venue.region} ${response.data[0].venue.country}`);
                let momentDate = moment(response.data[0].datetime).format(`MM DD YYYY`);
                console.log(`Date: ${momentDate}`);
               
                
            }

        }
    ).catch(function (error) {
        console.log(error);
    });
} 



function movieInfo(user) {
    if (!user) {
        user = `Mr.+Nobody`;
        console.log(`If you haven't watched "Mr.Nobody," then you should! It's on Netflix!
         `);
    }

    let movieUrl = `http://www.omdbapi.com/?t=${user}&y=&plot=short&apikey=trilogy`;

    axios.get(movieUrl).then(
        function (response) {
            console.log(`Title: ${response.data.Title}`);
            console.log(`Year: ${response.data.Year}`);
            console.log(`IMDB Rating: ${response.data.imdbRating}`);
            console.log(`Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}`);
            console.log(`Country: ${response.data.Country}`);
            console.log(`Language: ${response.data.Language}`);
            console.log(`Plot: ${response.data.Plot}`);
            console.log(`Actors: ${response.data.Actors}`);
          
        }
    ).catch(function (error) {
        console.log(error);
    });
} 


function spotSong(user) {
    if (!user) {
        user = `The Sign Ace of Base`;
        console.log(`You might like this jam! `);
    }

    spotify.search({ type: `track`, query: user, limit: 1 })
        .then(function (response) {
            //console.log(JSON.stringify(response, null, 2));
            console.log(`Artist: ${response.tracks.items[0].artists[0].name}`);
            console.log(`Song Title: ${response.tracks.items[0].name}`);
            console.log(`Album: ${response.tracks.items[0].album.name}`);
            let preview;
            if (response.tracks.items[0].preview_url === undefined || response.tracks.items[0].preview_url === null) {
                preview = `No song`;
            } else {
                preview = response.tracks.items[0].preview_url;
            }
            
            
        })
        .catch(function (err) {
            console.log(err);
        });
} 
function getRandom() {
    fs.readFile('./random.txt', 'utf8', function (error, data) {
        if (error) {
            return console.log(error);
        }

        let dataArr = data.split(',');

        if (dataArr[0] === 'spotify-this-song') {
            let textSong = dataArr[1];
            spotSong(textSong);
        }
        else if (dataArr[0] === 'concert-this') {
            let textArtist = dataArr[1];
            bandsInTown(textArtist);
        }
        else if (dataArr[0] === 'movie-this') {
            let textMovie = dataArr[1];
            movieInfo(textMovie);
        }
    });
}
