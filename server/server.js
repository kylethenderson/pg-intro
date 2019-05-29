const express = require('express'); //import express
const bodyParser = require('body-parser'); // import body-parser

const app = express(); // create new express app
const PORT = 5000; // set PORT variable to 5000
const songList = require('./modules/songList'); // import array called songList

app.use(express.static('server/public'));   // use express.static method to load index.html
app.use(bodyParser.urlencoded({extended:true}));    // use bodyParser to have access to req.body later

// get route for /songs - sends back the songList array
app.get('/songs', (req, res) => {
    res.send(songList);
})

// set app to listen on PORT and console log that message
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
