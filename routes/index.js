var express = require('express');
var router = express.Router();
var {adminSignup, studentSignup} = require('../actions/signup');
var {login} = require('../actions/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/adminSignup', adminSignup);
router.post('/studentSignup', studentSignup);
router.post('/login', login);


module.exports = router;
