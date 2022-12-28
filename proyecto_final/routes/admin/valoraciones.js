var express = require('express')
var router = express.Router()
var valoracionesModel = require('../../models/valoracionesModel')

router.get('/', async (req, res, next) => {
    var valoraciones = await valoracionesModel.getValoraciones()
    res.render('admin/valoraciones', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        valoraciones
    })
})

router.get('/agregar', async (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        agregarValoracion: true
    })
})

router.post('/agregar', async (req, res, next) => {

    try {
        if (req.body.autor != "" && req.body.reseña != "") {
            await valoracionesModel.insertValoraciones(req.body)
            res.redirect('/admin/valoraciones');
        } else {
            res.render('admin/agregar', {
                error: true,
                message: "Todos los campos son requeridos"
            })
        }
    } catch (error) {
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: "No se cargo la novedad"
        })
    }
})


module.exports = router