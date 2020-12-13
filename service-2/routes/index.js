var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Go to /availablemovies to check the available movies' });
});

router.get('/availablemovies', function(req, res, next) {
                res.send("These are the available movies :<br/>Movie no 1: ironman <br/>Movie no 2: spiderman <br/>Movie no 3: superman <br/>Movie no 4: hulk");
               
});

module.exports = router;
