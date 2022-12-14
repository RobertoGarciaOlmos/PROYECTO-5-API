const {registro, verUsuario, filtrarUsuarios,eliminarUsuario, actualizarUsuario,login,verInfoUsuario }= require('./User.controller');
const {newCupcake, verCupcake, eliminarCupcake,actualizarCupcake }= require('./Cupcake.controller');


module.exports={
  registro,
  verUsuario,
  filtrarUsuarios,
  eliminarUsuario,
  actualizarUsuario,
  newCupcake,
  verCupcake,
  eliminarCupcake,
  actualizarCupcake,
  login,
  verInfoUsuario,
  
}