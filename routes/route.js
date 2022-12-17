/** @format */

const { json } = require("express");
const express = require("express");
const router = express.Router();

const message = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res, next) => {
  res.render("home", { title: "Mini Messageboard", message: message });
  next();
});

router.get("/new", (req, res, next) => {
  res.render("form");
  next();
});

router.post("/new", (req, res) => {
  message.push({
    text: req.body.author,
    user: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;

