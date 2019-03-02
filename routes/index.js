var express = require("express");
var router = express.Router();
var User = require("../models/user");
var request = require("request");
var Mailer = require("../services/Mailer");
var emailTemplate = require("../services/emailTemplate");
var keys = require("../config/keys");
var MongoClient = require("mongodb").MongoClient;

var Email = require("../models/email");
var emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

//INDEX - main page where there is a form.
router.get("/", function (req, res) {
  res.render("main");
});

//CREATE - add new User info into MONGODB
router.post("/", function (req, res) {
  // get data from form
  var email = req.body.email;

  // make a query to see if this is already exist.
  var query = { email: email };
  User.find(query, function (err, foundEmail) {
    if (err) {
      console.log(err);
    } else {
      if (foundEmail.length > 0) {
        res.redirect("/fail");

        // check email validation here.
      } else if (emailRegexp.test(email)) {
        var newInfo = {
          email: email
        };

        // Create a new User info and save to DB
        User.create(newInfo, function (err, newlyCreated) {
          if (err) {
            console.log(err);
          } else {
            res.redirect("/success");
          }
        });
      } else {
        res.redirect("/fail");
      }
    }
  });
});

// subscribe successfuly
router.get("/success", function (req, res) {
  res.render("success");
});

// subsribe in failure, either non-valid email or already subscribed!
router.get("/fail", function (req, res) {
  res.render("fail");
});

module.exports = router;
