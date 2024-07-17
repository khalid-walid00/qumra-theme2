var express = require('express');
var router = express.Router();
const { aboutController } = require('../../controllers');

/* GET home page. */
router.get('/' , aboutController);

module.exports = router;
