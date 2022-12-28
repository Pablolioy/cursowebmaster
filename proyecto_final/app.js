var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');

require('dotenv').config();
var session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var videojuegosRouter = require('./routes/videojuegos');
var galeriaRouter = require('./routes/galeria');
var novedadesRouter = require('./routes/novedades');
var nosotrosRouter = require('./routes/nosotros');
var contactoRouter = require('./routes/contacto');

var adminLogin = require('./routes/admin/login');
var adminNoverades = require('./routes/admin/novedades');
var adminVideojuegos = require('./routes/admin/videojuegos');
var adminGaleria = require('./routes/admin/galeria');
var adminValoraciones = require('./routes/admin/valoraciones');
var adminNosotros = require('./routes/admin/nosotros');



var app = express();

// view engine setup
hbs.registerHelper('date', require('helper-date'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'lvaANDgjhenbvA',
  resave: false,
  saveUninitialized: true
}))

secured = async (req, res, next) => {
  try{
    if(req.session.id_usuario){
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch(error) {
    console.log(error);
  }
}

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Rutas

app.use('/videojuegos', videojuegosRouter);
app.use('/galeria', galeriaRouter);
app.use('/novedades', novedadesRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/contacto', contactoRouter);

//--------
app.use('/admin/login', adminLogin);
// app.use('/admin/index', secured, adminIndex);
app.use('/admin/novedades', secured, adminNoverades);
app.use('/admin/videojuegos', secured, adminVideojuegos);
app.use('/admin/galeria', secured, adminGaleria);
app.use('/admin/valoraciones', secured, adminValoraciones);
app.use('/admin/nosotros', secured, adminNosotros);
//-------------

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
