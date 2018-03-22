//core for http requests
var express = require("express");

var ws = require("./ws");
//cors
var cors = require("cors");
//used for express-session storage
var session = require('express-session');
//body parser to inquire body expressions
var bodyParser = require('body-parser');

//instantiate express environment
var app = express();

//enable CORS
app.use(cors());

//load config specs
app.config = require('../config.json');

require('./controllers/home-controller')(app);

//mark the app to use the router 
//app.use('', app.appRouter);
//start app on the configured port
var port = process.env.PORT || app.config.port;

app.listen(port);