var express = require("express");
var router = express.Router();
var msRestAzure = require('ms-rest-azure');
var MachineLearningManagement = require('azure-arm-machinelearning');
var keys = require("../config/keys");

var subscriptionId = keys.azureSid;

router.get("/hi", function (req, res) {
  msRestAzure
    .interactiveLogin()
    .then(credentials => {
      var client = new MachineLearningManagement.CommitmentPlansManagementClient(
        credentials,
        subscriptionId
      );
      return client.commitmentPlans.list();
    })
    .then(commitmentPlans => {
      console.log('List of commitmentPlans:');
      console.dir(commitmentPlans, { depth: null, colors: true });
      res.render("success");
    });
});

module.exports = router;
