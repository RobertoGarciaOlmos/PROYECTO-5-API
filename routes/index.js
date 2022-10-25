const express= require ('express');
const router = express.Router();
const userRouter = require ("./User.route");

router.get('/',(req,res)=>{
    res.send(
        `<h1>Bienvenidos a la Api / Welcome to API</h1>`
        );
});

router.use('/user',userRouter)

module.exports = router;