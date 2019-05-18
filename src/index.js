'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 8080;

/**
 * Express keeps listening to this given port
 *
 * @param {number} PORT        Port which your application listens to
 * @param {function} callback  Callback function to inform the developer that
 *                             the application is running on a given port.
 *
 */
app.listen(PORT, function () {
  console.info(`port ${PORT} is running!`);
});