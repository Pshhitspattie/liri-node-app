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
