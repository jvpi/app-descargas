const viewInicio = require('../componentes/inicio/router')
const express = require('express')
const router = express.Router()

router.get('/',viewInicio)

module.exports = router