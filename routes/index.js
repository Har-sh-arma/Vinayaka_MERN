var express = require('express');
var router = express.Router();
var adminSignup = require('../actions/signup');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/adminSignup', adminSignup);

module.exports = router;
