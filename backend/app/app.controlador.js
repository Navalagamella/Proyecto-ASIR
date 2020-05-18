//Importamos mongoose
const mongoose = require('mongoose');

//Importamos el modelo del esquema que hemos creado, que se encuentra en ./app.funcion.js
const todoList = require('./app.funcion.js');
//Body-Parser
//https://github.com/expressjs/body-parser
const bodyParser = require('body-parser');

//Añadir un nuevo registro a la to do list
exports.anadir = (req, res, next) => {
  const nuevoObjeto = {
    grupo_id: req.body.grupo_id,
    contenido: req.body.contenido
    }
//Creamos la funcion para añadir el nuevo objeto a la lista
//va a app.funcion.js usa la funcion anadir, entrega la variable nuevoObjeto
//y de ahi obtendremos o un error o un nuevo objeto que le indicamos que hacer
//con la funcion flecha
  todoList.anadir (nuevoObjeto, (err, todoObjeto) => {
    //si aparece un error
    if (err) return res.send(console.log(err));
    //Guardamos los datos para enviarlos al frontend
    const datosObjeto = {
      grupo_id: todoObjeto.grupo_id,
      contenido: todoObjeto.contenido
    }
    //Respuesta al Frontend
    return res.send({datosObjeto});

  })
}
//  todoList.obtener = (req, res, next) => {
//        const datosObjeto = {
//        nombre: req.body.nombre
//        }
//
//  todoList.find({ nombre: datosObjeto.nombre }, function (err, todoObjeto) {
//    return res.send ({datosObjeto})
//  });
//
//  }

//Obtener todos los registros de la todo list
exports.obtener = (req, res, next) => {

  const datosObjeto = {
    grupo_id: req.body.grupo_id
  }

  todoList.find({grupo_id:datosObjeto.grupo_id}, (err, todoObjeto) => {
    if (err) return res.send(console.log(err));
    if (!todoObjeto) {res.status(409).send({ message: 'Algo falla... ¿no usuario?'})}
    else {
    //Respuesta al frontend
    return res.send({todoObjeto})
    }
  });
}
