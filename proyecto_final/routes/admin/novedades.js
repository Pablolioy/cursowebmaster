var express = require('express');
var router = express.Router();
var novedadesModel = require("../../models/novedadesModel");
const date = require('date-and-time')



router.get('/', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();
    // novedades[0].hora_fecha=date.format(novedades[0].hora_fecha,"DD/MM/YYYY HH:MM")
    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades,
    })
    console.log(novedades)
    // console.log(novedades[0].hora_fecha)
})

router.get('/eliminar/:id', async(req, res, next) => {
    var id = req.params.id;
    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades')
  });

module.exports = router;