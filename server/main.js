/**
 * Created by Monica on 2017-03-26.
 */

var http = require('http');
var ip = require('ip');
var fs = require('fs');

var admin = require("firebase-admin");

var serviceAccount = require("./airast-basicapp-firebase-adminsdk-zlioj-d22c453401.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://airast-basicapp.firebaseio.com"
});

var port = 8081;

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

// require the module 
const OneSignalClient = require('node-onesignal').default;
 
// create a new clinet 
const client = new OneSignalClient("1681e4cf-3f82-4bc1-88c9-d5052bd97d7c","YmNiZWE4YWMtOTZiZC00NTgyLWFhYTAtNDU0OTlmYjBjOTk0" );
 
// send a notification 
client.sendNotification('test notification', {
    included_segments: 'all'
});

var db = admin.database();

let i=["Aadhar Card Number","Address","Date of Birth","Father's Name","Gender","Mother's Name","Name"];
let j=["Arrival Time","Arriving Port","Departing Port","Departure Time","Gate Number"];
let a=["Aadhar","Flight Schedule"];
let obj={};
let count=0;

for(let x=0;x<a.length;++x)
{
	let f;
	if(x==0)
		f= i.length;
	else
	    f=j.length;

	var d=a[x];

	for(let k=0;k<f;++k)
   {
 
var st;
if(x==0)
 st=i[k];
else
	st=j[k];

var dbref = db.ref(`/${d}/${st}/0`);

// Attach an asynchronous callback to read the data at our posts reference
dbref.once("value", function(snapshot) {
  //console.log(snapshot.val());
  //console.log("hey");
  //obj.push(snapshot.val());
  obj[count++]=snapshot.val();
 // console.log(obj);

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);

});
}
}

setTimeout(doSomething, 10000);
function doSomething()
{
	let obj1={};
let s;
let flag=0;
for(let k=0;k<i.length+j.length;++k,++flag)
{
	if(k==i.length)
		flag=0;
	if(k>=i.length)
		s=j[flag];
	else
		s=i[flag];
	obj1[`${s}`]= obj[k];
	//delete obj[k];
}
//console.log(myJSON);

var myJSON = JSON.stringify(obj1);

fs.writeFile("test.json", myJSON, function(err)
{
	if(err)
	{
		return console.log(err);
	}
});
}


//console.log("after obj");

http.createServer(serverHandler).listen(port);

console.log("Server running on " + ip.address() + ":" + port);
var qr = require('qr-image');
 
var qr_svg = qr.image('I love QR!', { type: 'png' });
qr_svg.pipe(require('fs').createWriteStream('i_love_qr.png'));
 
var svg_string = qr.imageSync('I love QR!', { type: 'png' });
