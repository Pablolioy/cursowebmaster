var express = require('express');
var router = express.Router();

const controllerUpload = require('../../controllers/upload')


router.get('/',  (req, res, next) => {
    res.render('admin/home', {
        layout: 'admin/layout',
        usuario: req.session.nombre
    })
})

router.post('/',controllerUpload.uploadHome,(req,res,next)=>{
    res.redirect('/admin')
})

module.exports = router