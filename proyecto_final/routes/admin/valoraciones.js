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
            message: "No se cargo la valoracion"
        })
    }
})

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await valoracionesModel.deleteValoracionById(id);
    res.redirect('/admin/valoraciones')
});
    
router.get('/modificar/:id', async(req, res, next) => {
    let id = req.params.id;
    var objValoracion = await valoracionesModel.getValoracionById(id);
    res.render('admin/modificar',{
        layout: 'admin/layout',
        usuario: req.session.nombre,
        modificarValoracion: true,
        objValoracion
    })
})

router.post('/modificar',async(req,res,next) => {
    try {
        let obj={
            autor: req.body.autor,
            valoracion: req.body.valoracion,
            reseña: req.body.reseña
        }
        console.log(req.body.id)
        console.log(obj)
        await valoracionesModel.modificarValidacionById(obj, req.body.id)
        res.redirect('/admin/valoraciones');
    } catch (error) {
        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message:'No se modifico la valoracion'
        })
    }
})



module.exports = router