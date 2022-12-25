var express = require('express');
const controllerUpload = require('../../controllers/upload')
var router = express.Router();
var videojuegosModel = require('../../models/videojuegosModel')

router.get('/', async function (req, res, next) {
    var juego = await videojuegosModel.getVideojuegos()
    res.render('admin/videojuegos', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        juego
    })
})

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await videojuegosModel.deleteVideojuegoById(id);
    res.redirect('/admin/videojuegos')
});

router.get('/agregar', async (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        agregarjuego: true,
    })
})

router.post('/agregar',async (req, res, next) => {

    try {
        if (req.body.nombre != "" && req.body.descripcion != "" && req.body.precio != "") {
            await videojuegosModel.insertVideojuego(req.body)
            res.redirect('/admin/videojuegos');
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

router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    var juego = await videojuegosModel.getVideojuegosById(id);
    console.log(juego)
    res.render('admin/modificar', {
        usuario: req.session.nombre,
        layout: 'admin/layout',
        modificarVideojuego: true,
        juego,
    })
})

router.post('/modificar', async (req, res, next) => {
    console.log("Entre en /modificar")
    console.log(req.body.id)
    try {
        let obj = {
            nombre: req.body.nombre,
            fecha_lanzamiento: req.body.fecha_lanzamiento,
            descripcion: req.body.descripcion,
            precio: req.body.precio
        }
        await videojuegosModel.modificarVideojuegoById(obj, req.body.id)
        res.redirect('/admin/videojuegos');
    } catch (error) {
        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico la novedad'
        })
    }
})

router.get('/modificar/cover/:id', async (req,res,next) => {
    let id = req.params.id;
    res.render('admin/modificar',{
        usuario: req.session.nombre,
        layout: 'admin/layout',
        modificarCaratula: true,
        id
    })
})
router.post('/modificar/cover/:id',controllerUpload.uploadCover,async (req,res,next) => {
    console.log(req.body)
    console.log(req.file)
    res.redirect('/admin/videojuegos');
})

router.get('/modificar/covermobile/:id', async (req,res,next) => {
    let id = req.params.id;
    res.render('admin/modificar',{
        usuario: req.session.nombre,
        layout: 'admin/layout',
        modificarCaratulaMobile: true,
        id
    })
})
router.post('/modificar/covermobile/:id',controllerUpload.uploadCoverMobile,async (req,res,next) => {
    console.log(req.body)
    console.log(req.file)
    res.redirect('/admin/videojuegos');
})

module.exports = router