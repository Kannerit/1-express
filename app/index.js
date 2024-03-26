const express = require("express");
const mongoose = require("mongoose");
const tableRouter = require('./router/tableRouter')
const hbs = require("express-handlebars");

const app = express();
const PORT = 1100;

mongoose
  .connect("mongodb://127.0.0.1:27017/1-express")
  .then(() => {
    console.log("We connected to Mongo :D");
  })
  .catch((err) => {
    console.log("Connection error :(", err);
  });

const User = require("./models/UserModel");



app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.get('/', (req,res) => {
  res.send('Welcome to the App :)!')
})

app.use('/users', tableRouter);

app.get("/mongoose", function (req, res) {
  User.find()
    .then((users) => {
      console.log(users);
      res.render("home", {users});
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/", (_req, res) => {
  res.render("home", {
    title: "My app title",
    content: "Lorem ipsum",
  });
});

/* Routes */
app.use("/users", tableRouter);

app.listen(PORT, () => {
  console.log("We're on port 1100 :D");
});
