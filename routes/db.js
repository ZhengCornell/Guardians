var request = require("request");
var Mailer = require("../services/Mailer");
var emailTemplate = require("../services/emailTemplate");
var keys = require("../config/keys");
var MongoClient = require("mongodb").MongoClient;

var Email = require("../models/email");

module.exports.init = async function () {
  return MongoClient.connect("mongodb://localhost/yelp_camp_v10")
    .then(async function (db) {
      var User = db.collection("users");
      return User.find().toArray();
    })
    .then(async function (allUser) {
      allUser.forEach(async user => {
        var email = user.email;

        if (email == null) {
          email = "zg242@cornell.edu";
        }
        console.log(email);

        var subject = "Warning: Cow's giving birth!";
        var body = "nihao";
        var title = subject;
        var email_real = new Email({
          title: title,
          subject: subject,
          body: body,
          recipients: email,
          dateSent: Date.now()
        });

        var mailer = new Mailer(
          email_real,
          emailTemplate(email_real)
        );
        await mailer.send();
        ////
      });
    });
};

require("make-runnable");
