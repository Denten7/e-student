var express = require('express'), path = require('path'), fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/client'));

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Streznik tece na ' + port + ' ...');