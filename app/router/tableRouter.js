const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      console.log(users);
      // res.json(users) here if I do this I do get the proper display of all the users on the /main page but once I connect it then I am unable to display anything :( ...)
      res.render("users", { users });
    })
    .catch((err) => {
      res.send(err);
    });
});
module.exports = router;
