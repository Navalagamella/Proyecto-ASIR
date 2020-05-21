//Importamos mongoose
const mongoose = require('mongoose');

//Importamos el modelo del esquema que hemos creado, que se encuentra en ./app.funcion.js
const todoList = require('./app.funcion.js');


exports.anadir = (req, res, next) => {
  //guardamos en un a variable los campos que se esperan que se envien desde el frontend
  const nuevoObjeto = {
    grupo_id: req.body.grupo_id,
    contenido: req.body.contenido,
    autor: req.body.autor
  };

  //Ahora llamamos a la funcion para añadir el nuevo objeto.
  //entregamos la variable que hemos recogido antes.
  //esto nos devuelve o un error o un objeto ya creado
  todoList.anadir(nuevoObjeto, (err, todoObjeto)=> {
    //si aparece un error
    if (err) res.json({error: err});
    res.json({ mensaje: 'Objeto añadido'});
  });
}

//Obtener todos los registros de la todo list
exports.obtener = (req, res) => {
  todoList.obtener({}, (err, todoObjeto) => {
    if (!todoObjeto) {res.status(409).send({ message: 'Algo falla... ¿no usuario?'})}
    else {
      //Respuesta al frontend que haremos mediante un json
      return res.json( todoObjeto )
    };
  })
}
