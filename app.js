const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//the app.use has to be done below the position where you called express in the file.
app.use("view engine", "ejs");

app.get("/", function (req, res) {
  let today = new Date();
  let currentDay = today.getDay();
  let day = "";

  if (currentDay === 6 || currentDay === 0) {
    day = "Weekend";
    res.render("List", { kindOfDay: day });
  } else {
    day = "Weekday";
    res.sendFile(__dirname + "/weekday.html");
  }
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
