'use strict';

var config 		= require('../config');
var mongoose 	= require('mongoose');
var logger 		= require('../logger');
var configDB = require('../config/database.js');
// Connect to the database
// construct the database URI and encode username and password.
mongoose.connect(configDB.url, {
    useMongoClient: true
}); // connect

// mpromise (mongoose's default promise library) is deprecated, 
// Plug-in your own promise library instead.
// Use native promises
mongoose.Promise = global.Promise;

module.exports = { mongoose, 
	models: {
		user: require('./schemas/user.js'),
		room: require('./schemas/room.js')
	}
};