/*===================== load all the files we need ========================================*/
let express = require ('express');
let register =require ('./register');

let router=express.Router();
/*=====================     providing routers    ========================================*/
router.post('/',register);
router.get('/')

module.exports=router;