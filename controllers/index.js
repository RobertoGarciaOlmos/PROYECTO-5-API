const {registro, verUsuario, filtrarUsuarios,eliminarUsuario, actualizarUsuario,login }= require('./User.controller');
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
  
}