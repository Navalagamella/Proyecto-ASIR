//Este es el archivo que "controla" la base de datos, hace uso de los datos
//Importamos las dependencias que vamos a utilizar.
const mongoose = require('mongoose');
//Importamos el modelo del esquema que hemos creado, que se encuentra en funcion.js
const loginUsuarios = require('./login.funcion.js');
//Body-Parser
//https://github.com/expressjs/body-parser
const bodyParser = require('body-parser');
//Importamos el jsonwebtoken para generar un token para la cuenta
//asi se mantendra la sesion iniciada.
//https://www.npmjs.com/package/jsonwebtoken
const jwt = require('jsonwebtoken');
//constante SECRET_KEY
const SECRET_KEY = 'password123456';
//Importamos bcrypt para encriptar la password
const bcrypt = require('bcryptjs');

//CREAR USUARIO

//Esta es la función que exportamos para crear usuarios, obtiene el modelo
//y envia los datos a la BD
//https://www.sitepoint.com/understanding-module-exports-exports-node-js/
//req.body tiene que ver con body-parser y mantendremos la misma nomenglatura
//que en nuestro esquema.
exports.crearUsuario = (req, res, next) => {
//Obtiene los datos que le enviamos a traves de un json o formulario
  const nuevoUsuario = {
    nombre: req.body.nombre,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password)
  }
        //Crea el nuevo usuario en la base de datos.
        //Al intentar crear el nuevo usuario tendremos dos opciones, o un error o un usuario nuevo
        //con la funcion flecha indicamos que tiene que hacer cuando ocurra
        //loginUsuario.crear - crear hace referencia a una funcion que guarda datos en la bd
        // el codigo de errores viene en la documentacion:
          loginUsuarios.crear (nuevoUsuario,(err, usuario)=> {
            if (err && err.code === 11000) return res.status(409).send('Ya existe ese email');
            if (err) return res.status(500).send('Error en el servidor.');
            //creamos el expire de la sesion
            const expiresIn = 24*3200;
            //Documentacion de jsonwebtoken: https://www.npmjs.com/package/jsonwebtoken
            //Synchronous Sign with default (HMAC SHA256)
            //Aqui utilizamos la llave secreta que encripta.
            const accessToken = jwt.sign({_id:usuario._id},SECRET_KEY,{expiresIn: expiresIn});
            //Guardamos los datos del nuevo usuario
            const datosUsuario = {
              nombre: usuario.nombre,
              email: usuario.email,
              accessToken: accessToken,
              expiresIn: expiresIn
            }

            //Respuesta al frontend
            return res.send({datosUsuario});
          });
}

//LOGIN DE USUARIO

//Login de usuarios de la base de datos.
exports.loginUsuario = (req, res, next) => {
  const datosUsuario ={
//obtiene los datos del usuario
    email: req.body.email,
    password: req.body.password
  }
//Con moongose buscamos en la bd los datos que acabamos de recopilar
//al buscar un usuario en la base de datos, hay tres opciones, 1 que exista y devuelva un usuario
//2 que de un error y 3 que no exista el usuario.
loginUsuarios.findOne({email:datosUsuario.email}, (err, usuario)=> {
  if (err) return res.status(500).send('Error en el servidor');
  if (!usuario) {res.status(409).send({ message: 'Eso no funciono'})}
  else {
      //cuando encuentre un usuario, guardará la contraseña y la comparara con la BD
      //Guardamos la contraseña para encriptarla
      var resulPassword = bcrypt.compareSync(datosUsuario.password, usuario.password);
      //Si la contraseña es correcta volvemos a crear un expiresIn
      if (resulPassword){
        const expiresIn = 24*3200;
        const accessToken = jwt.sign({id:usuario.id},SECRET_KEY,{expiresIn: expiresIn});
        const datosUsuario = {
          accessToken: accessToken,
          expiresIn: expiresIn
        }
    //Respuesta al frontend
    return res.send({datosUsuario})}
    else {
      //en caso de que la contraseña sea incorrecta
      res.status(409).send({message: 'contraseña incorrecta'});}
    }
  });
}
