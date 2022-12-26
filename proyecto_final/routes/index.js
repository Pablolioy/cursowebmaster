var express = require('express');
var router = express.Router();
var valoracionesModel = require('../models/valoracionesModel')

/* GET home page. */
router.get('/',async   function (req, res, next) {
  var valoraciones = await valoracionesModel.getValoraciones();
  console.log(valoraciones)
  res.render('index', {
    isHome: true,
    valoraciones
  });
});

module.exports = router;
