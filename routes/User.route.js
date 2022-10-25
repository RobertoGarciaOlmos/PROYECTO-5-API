/**
 * 1.Importar express
 * 2.Instancias enrutador
 * 3.Importar controladores
 * 4.Decrarar las rutas
 * 5.Exportamos el enrutador
 */

//1.

const express = require('express');

//2.
const router = express.Router();

//3.

const {
    registro,
    verUsuario,
    filtrarUsuarios,
    eliminarUsuario
} = require('../controllers');

//4

router.post('/',registro);
router.get('/getAll',verUsuario);
router.get('/filtrar',filtrarUsuarios);
router.delete('/:id',eliminarUsuario);


//5

module.exports=router;