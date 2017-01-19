var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    css: process.env.node_env != 'production' ? '/index/css/css.min.css' : '',
    js: process.env.node_env != 'production' ? '/index/js/js.min.js' : ''
  });
});

module.exports = router;
