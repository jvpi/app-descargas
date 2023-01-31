
const path = require('path')
const controller = {}
const fs = require('fs')

controller.inicio = function (req, res) {
    res.render('inicio')
}
controller.malwarebyte = function (req, res) {


    res.render('malwarebytes')
}
controller.panda = function (req, res) {

    res.render('panda')
}
controller.avast = function (req, res) {
    res.render('avast')
}
controller.descarga = function (req, res) {
    console.log(req.baseUrl);

   // res.redirect('/malwarebyte')
   res.download('./src/archivos/' + req.params.id,
        function (error) {
            if (error) {
                console.log(error, 'ha ocurrido un error');
               
            } else {
                console.log('descarga completada');
              
            }

        }
    )

}
module.exports = controller