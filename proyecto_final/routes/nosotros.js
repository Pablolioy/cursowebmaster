var express = require('express');
var router = express.Router();
const nosotrosModel = require('../models/nosotrosModel') 

router.get('/',async function(req, res, next) {
  var nosotros = await nosotrosModel.getEmpleados()
  console.log(nosotros)
  res.render('nosotros', {
    isNosotros: true,
    nosotros
  });
});

module.exports = router;
