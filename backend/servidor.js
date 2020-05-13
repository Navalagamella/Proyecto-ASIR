'use strict'

//Importamos las librerias y dependencias
//empezamos con Express
//https://expressjs.com/es/api.html 4.x.x
const express = require('express');
var app = express();

//IMPORTAR CORS PARA QUE PUEDA COMUNICARSE CON EL SERVIDOR DE ANGULAR
const cors = require('cors');
app.use(cors());
//Body-Parser
//https://github.com/expressjs/body-parser
const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true});
//Activamos body-parser
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(express.json());

//Creamos las rutas de nuestro servidor web.
//Importar las rutas del servidor web empezamos en /
//  todo esto está en la documentacion de express, puede variar con la version
// https://expressjs.com/es/4x/api.html express.Router([options])

  //Creamos un nuevo objeto ruta
  //https://expressjs.com/es/api.html#router
  var router = express.Router();

  //Importamos las rutas de ./login/login.rutas.js
  const loginRutas = require('./login/login.rutas.js');

  //Creamos la ruta por defecto que es /
  //https://expressjs.com/es/api.html#router.METHOD
  router.get('/', (req, res) => {
    res.send("Bienvenidos a HOME");
  });

        //Activamos las rutas
        app.use(router);
        loginRutas(router);

//Indicar por que puerto escuchará la aplicación ( en este caso express).
// http://expressjs.com/es/api.html#app.listen
app.listen(3000, function () {
  console.log('-----------------------------------------');
  console.log('Ejecutando Servidor Web en el puerto 3000');
  console.log('-----------------------------------------');
});


//Importamos la conexion con la BD
const DB = require('./configuracion/db.js');
