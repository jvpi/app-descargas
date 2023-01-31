const express = require('express')
const app = express()

const path = require('path')
const viewInicio = require('./componentes/inicio/router')
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))


app.use(viewInicio)
//ARCHIVOS ESTATICOS

app.use(express.static(path.join(__dirname,'public')))

module.exports = app
