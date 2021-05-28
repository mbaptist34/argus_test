var express = require('express');
var router = express.Router();


var count = 0;
/* Get the current count */
router.get('/count', function(req, res, next) {
  res.json({
    count: count
  });
}).post('/count', function(req, res, next) {
    count = req.body.count;
});

module.exports = router;