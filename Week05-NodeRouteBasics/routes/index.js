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

router.get('/getFeetInMile', function(req, res, next) {
    'use strict';
    console.log("Server side Search called.");
    //document.write('Feet In Mile: ');
    res.send({
        result: '5280 feet in one mile.'
    });
});

router.get('/calculateFeetFromMiles', function(req, res) {
    res.send({result: req.query.miles * 5280});
});

router.get('/calculateCircumference', function(req, res) {
    res.send({result: req.query.radius});
});

module.exports = router;
