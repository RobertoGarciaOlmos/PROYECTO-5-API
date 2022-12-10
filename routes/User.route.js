/**
 * 1.Importar express
 * 2.Instancias enrutador
 * 3.Importar controladores
 * 4.Decrarar las rutas
 * 5.Exportamos el enrutador
 */

//1.
const express = require('express');
const auth = require("../middleware/auth")

//2.
const router = express.Router();

//3.

const {
    registro,
    verUsuario,
    filtrarUsuarios,
    eliminarUsuario,
    actualizarUsuario,
    login,
} = require('../controllers');

//4

router.post('/',registro);
router.post('/login',login);
router.get('/getAll',auth, verUsuario);
router.get('/filtrar',filtrarUsuarios);
router.delete('/:id',eliminarUsuario);
router.put('/:id', actualizarUsuario);


//5

module.exports=router;