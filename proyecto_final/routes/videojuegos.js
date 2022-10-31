var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('videojuegos', {
    isVideojuegos: true
  });
});

module.exports = router;
