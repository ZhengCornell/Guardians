var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var indexRoutes = require("./routes/index");
var mlRoutes = require("./routes/ml");

var url = "mongodb://localhost/yelp_camp_v10";
mongoose.connect(url);

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", indexRoutes);
app.use("/", mlRoutes);


app.listen(3000);
