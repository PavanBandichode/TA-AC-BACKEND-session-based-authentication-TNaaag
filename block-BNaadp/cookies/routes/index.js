var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.cookie({ name: "pavan" });
  console.log(req.cookies);
  res.render("index", { title: "Express" });
});

module.exports = router;
