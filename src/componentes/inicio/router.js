const controller = require('./controller.js')
const express = require('express')
const router = express.Router()
router.get('/', controller.inicio)
router.get('/malwarebyte', controller.malwarebyte)
router.get('/panda', controller.panda)
router.get('/avast', controller.avast)
router.get('/descargar/:id', controller.descarga)
module.exports = router