const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
const songList = require('./modules/songList');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));


app.get('/songs', (req, res) => {
    res.send(songList);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
