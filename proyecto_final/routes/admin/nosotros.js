var express = require('express')
var router = express.Router();
var nosotrosModel = require('../../models/nosotrosModel')

router.get('/', async(req,res,next) => {
    var nosotros = await nosotrosModel.getEmpleados()
    console.log(nosotros)
    res.render('admin/nosotros',{
        layout: 'admin/layout',
        usuario: req.session.nombre,
        nosotros
    })
})

router.get('/agregar', async(req,res,next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        agregarEmpleado: true,
    })
})

router.post('/empleado/agregar', async(req,res,next) => {
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
        throw(error)
    }
})

module.exports = router