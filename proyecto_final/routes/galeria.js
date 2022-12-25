var express = require('express');
var router = express.Router();
var galeriaModel = require('../models/galeriaModel');


/* GET home page. */
router.get('/', async function(req, res, next) {

  var galeria = await galeriaModel.getImage();

  res.render('galeria', {
    isGaleria: true,
    galeria
  });
});

module.exports = router;
