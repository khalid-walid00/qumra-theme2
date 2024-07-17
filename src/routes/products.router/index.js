var express = require('express');
var router = express.Router();
const { productsController } = require('../../controllers');

/* GET home page. */
router.get('/' , productsController);

module.exports = router;
