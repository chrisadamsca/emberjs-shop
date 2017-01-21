/* nk078, ca033 */

//modules
var express = require('express');
var logger = require('./logger.js');
var app = express();
var bodyParser     = require('body-parser');

logger.log("####################################");
logger.log("##           Initialized          ##");
logger.log("####################################");

//set the port
var port = process.env.PORT || 3000;

var mongoose   = require('mongoose');
mongoose.connect('mongodb://hatchling:hatchling@ds159387.mlab.com:59387/hatchling');

//set the static files location
app.use(express.static(__dirname + '/public'));

//bodyParser Middleware to allow different encoding requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());       // to support JSON-encoded bodies

require('./app/routes')(app); //configure the routes

//startup our app at http://localhost:3000
app.listen(port);

//expose app
exports = module.exports = app;
