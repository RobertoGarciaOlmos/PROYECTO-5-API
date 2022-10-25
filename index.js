require('dotenv').config();


/** 
 * 1. Importar express
 * 2. Crear modelos
 * 3.Crear controlador
 * 4. Crear rutas
 * 5.Hacer instancia de la aplicacion
 * 6.Midelware
 * 7.Importar rutas
 * 8.Iniciar servidor
 */ 




 // 1. Importar Express
const express= require ('express');


// 5. Inicializar la función de Express
const app = express();

// 6. Agregar los middleware
app.use(express.json());

// 7. Declarar rutas
app.get('/',(req,res)=>{
    res.json({mensaje:'Bienvenidos'});
});


// 8. Iniciar servidor

app.listen(process.env.PORT, ()=>{
    console.log(`conectado a puerto: ${process.env.PORT}`)
})