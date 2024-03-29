var express = require('express');
var router = express.Router();
var galeriaModel = require('../../models/galeriaModel')

const fs = require('fs')
const controllerUpload = require('../../controllers/upload')

router.get('/', async (req, res, next) => {
    var galeria = await galeriaModel.getImage()
    res.render('admin/galeria', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        galeria
    })
})

router.post('/agregar', async (req, res, next) => {
    let obj= {
        descripcion: ""
    }
    await galeriaModel.insertGaleria(obj)
    res.redirect('/admin/galeria')
})

router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id
    var galeria = await galeriaModel.getImageById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        modificarGaleria: true,
        galeria
    })
})

router.post('/modificar/:id', controllerUpload.uploadGaleria, async (req, res, next) => {
    try {
        let obj = {
            descripcion: req.body.descripcion,
        }
        await galeriaModel.modificarImageById(obj, req.body.id)
        res.redirect('/admin/galeria')
    } catch (error) {
        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico la galeria'
        })
    }
})

router.get('/eliminar/:id', async (req, res, next) => {
    let id = req.params.id
    await galeriaModel.deleteGaleriaById(id);
    try {
        fs.unlinkSync('./public/images/galeria/'+ id +'.jpg')
      } catch(err) {
        return
      }
    res.redirect('/admin/galeria')
});

module.exports = router