// Archivo de configuracion de acceso a la base de datos MongoDB
//En este archivo indicamos donde tiene que conectarse.
//https://mongoosejs.com/docs/api.html#connection_Connection
const mongoose = require('mongoose');

//realizamos la conexion con la base de datos.
//mongodb es el usuario que está instalado en la máquina para usar mongodb // IP / nombre de la BD
//si no existe la BD se creará.
//Hay que insertar esta linea debido a que se utiliza un nuevo parser, este warning sale por consola.
//useNewUrlParser https://mongoosejs.com/docs/connections.html
//Otro error que sale en consola
//https://github.com/strongloop/loopback-connector-mongodb/issues/540
mongoose.connect('mongodb://localhost/proyecto', { useNewUrlParser: true, useUnifiedTopology:true })
//Vamos a programar una alerta que nos informe si se ha conectado con éxito a la BD
//https://mongoosejs.com/docs/connections.html
  .catch(err => { console.log('************************'),
                  console.log('Error de conexion con BD.'),
                  console.log('${err}'),
                  console.log('************************')
                })
//Si todo funciona correctamente, que tambien nos informe
  .then( () => { console.log('Conectado con BD.')})
;

var DB = mongoose.connection;
module.exports = DB;
