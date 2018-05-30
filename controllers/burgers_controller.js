var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
res.redirect("/burgers");
})

router.get("/burgers", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burger_name: data
    };
    res.render("index", hbsObject);
  })
})

router.post("/burgers", function (req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
      req.body.burger_name, req.body.devoured
    ], function (result) {
      res.redirect("/burgers");
    });
});

router.post("/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {

    res.redirect("/burgers");
  });
});



module.exports = router;
