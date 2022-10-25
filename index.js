require('dotenv').config();



 // 1. Importar Express
const express= require ('express');


// 2. Inicializar la función de Express
const app = express();

// 3. Agregar los middleware
app.use(express.json());

// 4. Declarar rutas
app.get('/',(req,res)=>{
    res.json({mensaje:'Bienvenidos'});
});


// 5. Iniciar servidor

app.listen(process.env.PORT, ()=>{
    console.log(`conectado a puerto: ${process.env.PORT}`)
})