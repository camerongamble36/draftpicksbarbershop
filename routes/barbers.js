var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.sendFile('../public/barbers.html');
});

module.exports = router;