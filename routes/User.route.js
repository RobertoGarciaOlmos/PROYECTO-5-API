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
    verInfoUsuario,
} = require('../controllers');

//4

router.post('/',registro);
router.post('/login',login);
router.get('/getAll',auth, verUsuario);
router.get('/filtrar',auth, filtrarUsuarios);
router.delete('/:id',auth, eliminarUsuario);
router.put('/:id',auth, actualizarUsuario);
router.get('/',auth, verInfoUsuario);


//5

module.exports=router;