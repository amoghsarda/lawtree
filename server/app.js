// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs')
const app = express();
const bodyParser = require('body-parser');

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


//Read up on what this does
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());



app.post('/waitlist', (req, res) => {
	fs.appendFile('waitlist.txt', (req.body.email + '\n'), (err) => {
	      res.send('Successfully registered' + req.body.email);
  	});
});

module.exports = app;