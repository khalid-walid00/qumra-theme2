var express = require('express');
var router = express.Router();
const { pageController } = require('../../controllers');

/* GET home page. */
router.get('/:slug' , pageController);

module.exports = router;
