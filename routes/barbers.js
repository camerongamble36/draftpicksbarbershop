var express = require("express");
var router = express.Router();

// Get barbers page.
router.get("/", function(req, res, next) {
  res.sendFile("../public/barbers.html");
});

module.exports = router;
