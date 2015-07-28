/*
	Copyright 2015, Google, Inc.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
"use strict";
var path = require('path');
var fs=require('fs');
var express = require('express');
var http = require('http');
var app = express();
//var server = http.createServer(app);

/* Include the app engine handlers to respond to start, stop, and health checks. */
app.use(require('./lib/appengine-handlers'));
app.use(express.static(__dirname ));

// [START hello_world]

app.get('/', function(req, res) {
 // res.status(200).send("Hello, world!");
  fs.readFile('list.html', function (error, data) {
    res.writeHead(200, {'content-Type': 'text/html'});
    res.end(data);

  });
});




// [END hello_world]

// [START server]
/* Start the server */
var server = app.listen(process.env.PORT || '8080', '0.0.0.0', function() {
  console.log('App listening at http://%s:%s', server.address().address, server.address().port);
  console.log("Press Ctrl+C to quit.");
});
// [END server]
