var express = require('express');
const nunjucks = require('nunjucks');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const {theme} = req
  const filePath = path.join(__dirname, '../themes', theme, 'products.njk');
  const imagePath = 'bankTransfer_logo.png'; // مسار الصورة

  nunjucks.render(filePath,{title: "dsfsd",description: 'fjsdj sdfkj skldfj ' , imageURL: imagePath}, (err, data) => {
    if (err) {
      console.error("🚀 ~ Error rendering template:", err);
      return next(err);  // إرسال الخطأ إلى Middleware الخاص بالتعامل مع الأخطاء
    }
    res.send(data);
  });});

module.exports = router;
