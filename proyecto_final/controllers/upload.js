const multer = require('multer')

const conf = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/juegos')
    },
    filename: function (req, file, cb) {
        cb(null, `${req.body.id}.png`)
    },
})

const confMobile = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/mobile')
    },
    filename: function (req, file, cb) {
        cb(null, `${req.body.id}.png`)
    },
})

const confGaleria = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/galeria')
    },
    filename: function (req, file, cb) {
        cb(null, `${req.body.id}.jpg`)
    },
})

const confhome = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, `home1.jpg`)
    },
})

const confEmpleados = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/emp')
    },
    filename: function (req, file, cb) {
        cb(null, `${req.body.id}.png`)
    },
})

const upload = multer({storage: conf })
const uploadMobile = multer ({storage: confMobile})
const uploadGaleria = multer ({storage: confGaleria})
const uploadHome = multer ({storage: confhome})
const updateEmpleado = multer ({storage: confEmpleados})


exports.uploadCover = upload.single('foto')
exports.uploadCoverMobile = uploadMobile.single('foto_mobile')
exports.uploadGaleria = uploadGaleria.single('imagen')
exports.uploadHome = uploadHome.single('imagen')
exports.updateEmpleado = updateEmpleado.single('foto_emp')