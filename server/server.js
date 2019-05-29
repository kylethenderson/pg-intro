const express = require('express'); //import express
const bodyParser = require('body-parser'); // import body-parser
const pg = require('pg'); // import pg after install
const Pool = pg.Pool; // creates a pool of connections to our db using pg - capitalized because its a constructor

const app = express(); // create new express app
const PORT = 5000; // set PORT variable to 5000

app.use(express.static('server/public'));   // use express.static method to load index.html
app.use(bodyParser.urlencoded({extended:true}));    // use bodyParser to have access to req.body later

// connect to db
const config = {
    database: 'music_library', // name of db - check postico for name
    host: 'localhost',  // host - we are using localhost
    port: 5432, // post that postgres is running on, which is 5432
}

const pool = new Pool(config); // create new pool object using Pool and our config object
// const pool = new (require('pg').Pool(config));

// get route for /songs - sends back the songList array
app.get('/songs', (req, res) => {
    // ensure db is connected abocve
    // make a select query to our db.
    pool.query('SELECT * FROM "songs";')
        .then((result) => {
            res.send(result.rows);
        });
    // in theory, that'll be a promise.
    // when we get the response back
    //execute the res.send to the client
    // SELECT * FROM "songs";
    //.then  - after query is complete
});

app.post('/songs', (req, res) => {
    // make a post/insert request to our db.
    // in theory, that'll be a promise.
    // when we get the response back
    //execute the res.send to the client
    
    res.sendStatus(200);
});

// set app to listen on PORT and console log that message
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
