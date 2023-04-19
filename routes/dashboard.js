var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).send({
    approved:5,
    pending:10,
    declined:2
  });
});

module.exports = router;
