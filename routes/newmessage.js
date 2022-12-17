/** @format */

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  //res.send("success form")
  res.render("form");
  next();
});

module.exports = router;

