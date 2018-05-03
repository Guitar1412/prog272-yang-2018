var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  'use strict';
  res.render('index', { title: 'NodeRouteBasics Yang' });
});

router.get('/search', function(req, res, next) {
  'use strict';
  console.log("Server side Search called.");
    res.send({
        result: 'success foo',
        value: 'search result is ^',
        errors: 'none'
    });
});

module.exports = router;
