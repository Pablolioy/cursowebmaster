var express = require('express')
var router = express.Router()
var valoracionesModel = require('../../models/valoracionesModel')

router.get('/', async(req,res,next)=>{
    var valoraciones = await valoracionesModel.getValoraciones()
    res.render('admin/valoraciones',{
        layout: 'admin/layout',
        valoraciones
    })
})

module.exports = router