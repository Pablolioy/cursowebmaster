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

const upload = multer({ storage: conf })
const uploadMobile = multer ({ storage: confMobile})
const uploadGaleria = multer ({ storage: confGaleria})

exports.uploadCover = upload.single('foto')
exports.uploadCoverMobile = uploadMobile.single('foto_mobile')
exports.uploadGaleria = uploadGaleria.single('imagen')
