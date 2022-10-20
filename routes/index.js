var express = require('express');
var router = express.Router();
var {adminSignup, studentSignup} = require('../actions/signup');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/adminSignup', adminSignup);

router.post('/studentSignup', studentSignup);

module.exports = router;
