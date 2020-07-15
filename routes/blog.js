var express = require("express");
var router = express.Router();

// Get Blog Page
router.get("/", function(req, res, next) {
  res.sendFile("../public/blog.html");
});

module.exports = router;
