var express = require('express')
var router = express.Router();
var nosotrosModel = require('../../models/nosotrosModel')
const controllerUpload = require('../../controllers/upload')
const fs = require('fs');
const { throws } = require('assert');


router.get('/', async (req, res, next) => {
    var nosotros = await nosotrosModel.getEmpleados()
    console.log(nosotros)
    res.render('admin/nosotros', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        nosotros
    })
})

router.get('/agregar', async (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        agregarEmpleado: true,
    })
})

router.post('/empleado/agregar', async (req, res, next) => {
    try {
        let obj = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            puesto: req.body.puesto,
            descripcion: req.body.descripcion
        }
        await nosotrosModel.insertEmpleado(obj);
        res.redirect('/admin/nosotros')
    } catch (error) {
        throw (error)
    }
})

router.get('/modificar/cover/:id', async (req, res, next) => {
    let id = req.params.id;
    res.render('admin/modificar', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        id,
        modificarEmpleadoFoto: true
    })
})

router.post('/modificar/cover/:id', controllerUpload.updateEmpleado, (req, res, next) => {
    res.redirect('/admin/nosotros')
})

router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id
    var nosotros = await nosotrosModel.getEmpleadoById(id)
    res.render('admin/modificar', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        modificarEmpleado: true,
        id,
        nosotros
    })
})

router.post('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    let obj = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        puesto: req.body.puesto,
        descripcion: req.body.descripcion,
    }
    await nosotrosModel.modificarEmpleadoById(obj, id);
    res.redirect('/admin/nosotros')
})

router.get('/eliminar/:id', async (req, res, next) => {
    let id = req.params.id
    await nosotrosModel.deleteEmpleadoById(id)
    res.redirect('/admin/nosotros')

})

module.exports = router