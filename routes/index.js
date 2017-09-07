var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

var url = '/api/whoami';

router.get(url, function(req, res) {
  var language = req.acceptsLanguages()[0];
  var software = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser;
  var ipaddress = req.ip;

  res.json({ 'ipaddress': ipaddress, 'language': language, 'software': software} );
});

module.exports = router;
