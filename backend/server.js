var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require("cors");
var router = express.Router();
var session = require('express-session');

var app = express();

app.use('/api', router);

app.listen(3001);
console.log("Listening to port 3001\n");