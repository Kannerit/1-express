const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      console.log(users);
      res.render("users", { users });
    })
    .catch((err) => {
      res.send(err);
    });
});
module.exports = router;
