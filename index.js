/** @format */

const express = require("express");
const home = require("./routes/route");

const app = express();

app.set("view engine", "ejs");

//app.use("/", home);
app.use("/", home);

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 8000");
  }
});

