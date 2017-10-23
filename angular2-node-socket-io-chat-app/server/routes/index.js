let express = require ('express');

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

module.exports = router;
