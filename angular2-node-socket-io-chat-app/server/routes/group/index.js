let express = require ('express');
let group = require ('./group');

const router = express.Router();
/* =====================     providing routers    ======================= */
router.post('/', group);
module.exports = router;
