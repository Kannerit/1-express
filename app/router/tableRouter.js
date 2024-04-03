const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

router.get("/", (_req, res) => {
  User.find()
    .lean()
    .then((users) => {
      res.render("home", { users: users });
    })
    .catch((err) => {
      res.send(err);
    });
});
module.exports = router;
