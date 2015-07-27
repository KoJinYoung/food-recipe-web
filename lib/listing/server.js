/**
 * Created by HOME on 2015-07-27.
 */
/**
 * Created by HOME on 2015-07-21.
 */
var fs = require('fs');
var http = require('http');


http.createServer(function (request, response) {

  fs.readFile('list.html', function (error, data) {
    response.writeHead(200, {'content-Type': 'text/html'});
    response.end(data);

  });

}).listen(7777, function() {
  console.log('server runnting at7777');


});
