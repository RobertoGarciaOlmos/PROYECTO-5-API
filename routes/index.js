const express= require ('express');
const router = express.Router();
const userRouter = require ("./User.route");
const cupcakeRouter = require ("./Cupcake.route")

router.get('/',(req,res)=>{
    res.send(
        `<h1>Bienvenidos a la Api 1 / Welcome to API 1</h1>`
        );
});

router.use('/user',userRouter)
router.use('/cupcake',cupcakeRouter)

module.exports = router;

