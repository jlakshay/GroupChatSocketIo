/*===================== load all the files we need ========================================*/
let express = require ('express');
let login = require ('./login');

let router=express.Router();
/*=====================     providing routers    ========================================*/
router.post('/',login);

module.exports = router;
