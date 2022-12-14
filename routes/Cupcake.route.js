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
    newCupcake,
    verCupcake,
    eliminarCupcake,
    actualizarCupcake
} = require('../controllers');

//4

router.post('/', newCupcake);
router.get('/getAll', verCupcake);
router.delete('/:id',auth, eliminarCupcake);
router.put('/:id',auth, actualizarCupcake);


//5

module.exports=router;