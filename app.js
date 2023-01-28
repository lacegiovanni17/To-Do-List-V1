const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [ "Buy Food", "Cook Food", "Eat Food"];
//the app.use has to be do"ne below the position where you called express in the file.
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindOfDay: day, newListItem: items });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
