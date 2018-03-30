// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
// month list
var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get ('/:ts', function (req, res) {
  var ts = req.params.ts;
  let d;
  try {
    let temp = parseInt (ts);
    if (isNaN (temp)) throw '';
    ts = temp * 1000;
  } catch (e) {
  
  }
  try {
    d = new Date (ts);
    if (!d.toJSON ()) throw 'Invalid Date Format Error';
  } catch (err) {
    return res.status (500).json ({natural: null, unix: null});
  }
  res.status (200).json ({
    natural: `${months [d.getMonth ()]} ${d.getDate ()}, ${d.getFullYear ()}`,
    unix: parseInt ((d.getTime () / 1000).toFixed (0))
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
