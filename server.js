const express = require('express'); //since its in nodemodules, doesnt have to have file path
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');

const hostname = 'localhost';
const port = 3000;

const app = express(); //returns express server app
app.use(morgan('dev')); //logs using development version
app.use(express.json()); //parses json to JS for use

app.use('/campsites', campsiteRouter)


app.use(express.static(__dirname + '/public'))

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

