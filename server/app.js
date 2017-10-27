/**
 * Created by Monica on 2017-03-26.
 */


var http = require('http');
var ip = require('ip');
var fs = require('fs');

var port = 8000;

// store the contents of 'index.html' to a buffer
var get = fs.readFileSync('./get.html');
var post = fs.readFileSync('./post.html');

var serverHandler = function(req, res) {
    if (req.method === 'POST'){
        // for POST requests, serve up the contents that were posted
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(post);
    } else {
        // for GET requests, serve up the contents in 'index.html'
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(get);
    }
};

const OneSignalClient = require('node-onesignal').default;

// create a new clinet
const client = new OneSignalClient("1681e4cf-3f82-4bc1-88c9-d5052bd97d7c", "YmNiZWE4YWMtOTZiZC00NTgyLWFhYTAtNDU0OTlmYjBjOTk0");

// send a notification
client.sendNotification('test notification', {
    included_segments: ["All"]
});


http.createServer(serverHandler).listen(port);

console.log("Server running on " + ip.address() + ":" + port);
