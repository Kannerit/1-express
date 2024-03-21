const express = require("express");
const mongoose = require("mongoose");
const tableRouter = require("./router/tableRouter");
const User = require("./models/UserModel");
const hbs = require("express-handlebars");

const app = express();

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

const PORT = 1100;

mongoose.connect("mongodb://localhost:27017/1-express")
  .then(() => {
    console.log("We connected to Mongo :D");
  })
  .catch((err) => {
    console.log("Connection error :(", err);
  });

app.get("/mongoose/", function (req, res) {
  User.find()
    .then((users) => {
      res.render("users", {
       users: users
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/", (req, res) => {
  res.send("We are here :D");
});

/* Routes */
app.use("/main", tableRouter);

app.listen(PORT, () => {
  console.log("We're on port 1100 :D");
});
