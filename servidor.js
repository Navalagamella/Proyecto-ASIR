'use stric'

//Importar la dependencia y llama a la funcion express()
const express = require('express');
var app = express();

//Importar las rutas del servidor web empezamos en /
//  todo esto está en la documentacion de express, puede variar con la version
// https://expressjs.com/es/4x/api.html express.Router([options])
var router = express.Router();
//creamos la ruta
// https://expressjs.com/es/4x/api.html#router
router.use(function (req, res, next) {
  res.send("Bienvenidos a HOME");
});
//Activamos la ruta
app.use(router);

app.listen(3000, function () {
  console.log('Ejecutando Servidor Web en el puerto 3000');
});
