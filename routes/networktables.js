var express = require('express');
var router = express.Router();
var wpilibclient = require('wpilib-nt-client')

const client = new wpilibclient.Client()
 


/* GET users listing. */

router.get('/', function(req, res, next) {
  // Connects the client to the server on team 3571's roborio
client.start((isConnected, err) => {
  // Displays the error and the state of connection
   res.send({ isConnected, err });
}, 'roborio-3571.local');


});

module.exports = router;

