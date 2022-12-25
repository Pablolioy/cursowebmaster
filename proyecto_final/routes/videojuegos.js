var express = require('express');
var router = express.Router();
var videojuegosModel = require('../models/videojuegosModel')
require('moment')

/* GET home page. */
router.get('/', async function(req, res, next) {

  var videojuegos = await videojuegosModel.getVideojuegos();
  res.render('videojuegos', {
    isVideojuegos: true,
    videojuegos
  });
});

router.get('/:id', async function(req, res, next) {
  var id = req.params.id;
  var juego = await videojuegosModel.getVideojuegosById(id);
  res.render('videojuegos_perfil', {
    isVideojuegos: true,
    layout: './layout',
    juego
  })
})


module.exports = router;
