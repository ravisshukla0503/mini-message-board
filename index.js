/** @format */

const express = require("express");
const cors = require('cors');
const home = require("./routes/route");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/", home);

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 5000");
  }
});

