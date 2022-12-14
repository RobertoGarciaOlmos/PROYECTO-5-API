
/** 
 * 1. Importar variables de entorno,
 * 2. Crear modelos / importar -> "carpeta models"
 * 3. Importar express, mongoose y Router
 * 4. Hacer instancia de la aplicacion
 * 5. Midelware
 * 6. Conectar mongoose
 * 7. Definar rutas
 * 8.Iniciar servidor
 */ 

 // 1. 
require('dotenv').config();

//2
require ('./models')

//3
const express= require ('express');
const mongoose= require ('mongoose');
const cors = require("cors");
const routes = require('./routes');


// 4
const app = express(); 

//cors

app.use(cors());



// 5
app.use(express.json());


// 6

mongoose.connect(process.env.URI_MONGO_SERVER);

//7

app.use("/v1",routes);

app.use((req,res)=>
res.send (`<a href="/v1"> Go to API </a>`));



// 8. Iniciar servidor

app.listen(process.env.PORT, ()=>{
    console.log(`conectado a puerto: ${process.env.PORT}`)
});