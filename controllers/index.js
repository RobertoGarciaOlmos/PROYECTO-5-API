const {registro, verUsuario, filtrarUsuarios,eliminarUsuario, actualizarUsuario }= require('./User.controller');
const {newCupcake, verCupcake, filtrarCupcakes, eliminarCupcake,actualizarCupcake }= require('./Cupcake.controller');


module.exports={
  registro,
  verUsuario,
  filtrarUsuarios,
  eliminarUsuario,
  actualizarUsuario,
  newCupcake,
  verCupcake,
  filtrarCupcakes,
  eliminarCupcake,
  actualizarCupcake
}