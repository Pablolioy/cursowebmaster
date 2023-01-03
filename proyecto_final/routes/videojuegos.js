var express = require('express');
var router = express.Router();
var videojuegosModel = require('../models/videojuegosModel')
require('moment')

/* GET home page. */
router.get('/', async function (req, res, next) {

  var videojuegos = await videojuegosModel.getVideojuegos();
  res.render('videojuegos', {
    isVideojuegos: true,
    videojuegos
  });
});

router.get('/:id', async function (req, res, next) {
  var id = req.params.id;
  var juego = await videojuegosModel.getVideojuegosById(id);
  var listadoJuegos = await videojuegosModel.getListVideojuegos();
  console.log("Listado ",listadoJuegos)
  console.log("Juego ",juego)
  console.log("id ",id)

  for (let i = 0; i < listadoJuegos.length; i++) {
    console.log("listado, orden ",listadoJuegos[i].orden)
    if (id == listadoJuegos[i].id) {
      
      juego.orden = listadoJuegos[i].orden;
      
      if (juego.orden - 1 >= 0) {
        juego.anterior = listadoJuegos[i - 1].id;
      }
        
        if (juego.orden + 1 < listadoJuegos.length) {
          juego.siguiente = listadoJuegos[i + 1].id
        }
    }
  }
    res.render('videojuegos_perfil', {
      isVideojuegos: true,
      layout: './layout',
      listadoJuegos,
      juego
  })
})


module.exports = router;
