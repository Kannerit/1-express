const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

router.get("/users", (_req, res) => {
    User.find(user)
    .then((users) => {
      res.render("home", { users });
    })
    .catch((err) => {
      res.send(err);
    });
});
module.exports = router;
