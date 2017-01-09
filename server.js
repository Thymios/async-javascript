// Load modules.
// It is good practice to put includes and modules at the top of your files.
var async = require('async');
var express = require('express');
var request = require('request');
var serveStatic = require('serve-static');

// Create our express app.
var app = express();

// Serve statically every file in the public directory.
// These files will be available to our browser.
app.use(serveStatic(__dirname + '/public'));

// We also need to make some of the async module's file(s) available.
app.use(serveStatic(__dirname + '/node_modules/async/dist'));

// And jQuery.
app.use(serveStatic(__dirname + '/node_modules/jquery/dist'));

/*
	An API end-point. In this case it's a proxy for running Shodan search queries.

	For more information about the Shodan API:
	https://developer.shodan.io/api
*/
app.get('/search', function(req, res, next) {

	// The code here executes any time your browser makes a request to http://localhost:3000/search
	console.log('GET /search');

	console.log('Searching Shodan for "' + req.query.q + '"');

	// Make a request from the local server to the Shodan API server.
	request({
		method: 'get',
		url: 'https://api.shodan.io/shodan/host/search',
		qs: {
			key: 's1MahRaHDgjlmptSsf6y7oCcyz4AjB9Q',
			query: req.query.q,
			minify: true
		}
	}, function(error, response, body) {

		console.log('Received response from Shodan.');

		if (error) {
			return next(error);
		}

		// Send the response from Shodan directly to the browser.
		res.json(body).status(200).end();
	});
});

// This tells our express application to listen for local requests on port 3000.
app.listen(3000, function() {
	console.log('Server started and listening at localhost:3000');
});
