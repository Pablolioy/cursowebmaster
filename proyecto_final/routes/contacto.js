var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/',(req, res, next) => {
  res.render('contacto',{
    isContacto: true
  });
  
});

router.post('/', async (req, res, next) => {
  console.log(req.body);

  var nombre = req.body.nombre;
  var mail = req.body.mail;
  var mensaje = req.body.mensaje;

  var obj = {
    to: mail,
    subject: "Test Team Cherry",
    html: nombre + " se contacto desde la web Team Cherry y solicita mas informacion a este correo: " + mail + "<br> Ademas, hiso el siguiente comentario: " + mensaje,
  }
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });
  
  var info = await transport.sendMail(obj);
  
  res.render('contacto', {
    isContacto: true,
    message: "Correo enviado exitosamente",
  })
})



module.exports = router;
