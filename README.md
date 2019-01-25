# liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

There are commands that need to be typed in order for LIRI to pull up information. 
The commands are:

#### node liri.js concert-this <artist/band name here>

#### node liri.js spotify-this-song ' ' 

#### node liri.js movie-this ' '

#### node liri.js do-what-it-says 

## Each command does something different. 

### node liri.js concert-this <artist/band name here>

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

    Name of the venue

    Venue location

    Date of the Event (use moment to format this as "MM/DD/YYYY")
    
### node liri.js spotify-this-song '<song name here>'
    
This will show the following information about the song in your terminal/bash window


    Artist(s)
    The song's name
    A preview link of the song from Spotify
    The album that the song is from
    
### node liri.js movie-this '<movie name here>'
    
This will output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
