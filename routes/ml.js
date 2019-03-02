var express = require("express");
var router = express.Router();
var msRestAzure = require('ms-rest-azure');
var MachineLearningManagement = require('azure-arm-machinelearning');
var keys = require("../config/keys");
var request = require("request");
var url = "https://ussouthcentral.services.azureml.net/workspaces/5c614dc7775244bf92aba3f26a94cd86/services/39faa77740c4410883cdc347bfe6f06d/execute?api-version=2.0&details=true";
var api_key = "+HTES6GA6ydyXwO1FBWeTh9OE4IZyVIsYSRGsxhh+8+ZfhpU8vfUxzlHoiFXPpDaUZqcea5H1PpTZCBr4QWhHg==";
var headers = { 'Content-Type': 'application/json', 'Authorization': ('Bearer ' + api_key) }
// var input = {
//   "Inputs": {
//     "input1": {
//       "ColumnNames": [
//         "Col1",
//         "Col2",
//         "Col3",
//         "Col4",
//         "Col5",
//         "Col6",
//         "Col7",
//         "Col8",
//         "Col9",
//         "Col10",
//         "Col11",
//         "Col12",
//         "Col13",
//         "Col14",
//         "Col15"
//       ],
//       "Values": [
//         [
//           "0",
//           "value",
//           "0",
//           "value",
//           "0",
//           "value",
//           "value",
//           "value",
//           "value",
//           "value",
//           "0",
//           "0",
//           "0",
//           "value",
//           "value"
//         ],
//         [
//           "0",
//           "value",
//           "0",
//           "value",
//           "0",
//           "value",
//           "value",
//           "value",
//           "value",
//           "value",
//           "0",
//           "0",
//           "0",
//           "value",
//           "value"
//         ]
//       ]
//     }
//   },
//   "GlobalParameters": {}
// };

var input = {
  "input1": {
    "ColumnNames": [
      "Col1",
      "Col2",
      "Col3",
      "Col4",
      "Col5",
      "Col6",
      "Col7",
      "Col8",
      "Col9",
      "Col10",
      "Col11",
      "Col12",
      "Col13",
      "Col14",
      "Col15"
    ],
    "Values": [
      [
        "0",
        "value",
        "0",
        "value",
        "0",
        "value",
        "value",
        "value",
        "value",
        "value",
        "0",
        "0",
        "0",
        "value",
        "value"
      ],
      [
        "0",
        "value",
        "0",
        "value",
        "0",
        "value",
        "value",
        "value",
        "value",
        "value",
        "0",
        "0",
        "0",
        "value",
        "value"
      ]
    ]
  }
};
var options = {
  url: url,
  headers: headers
};

router.get("/hi", function (req, res) {
  // msRestAzure
  //   .interactiveLogin()
  //   .then(credentials => {
  //     var client = new MachineLearningManagement.CommitmentPlansManagementClient(
  //       credentials,
  //       subscriptionId
  //     );
  //     return client.commitmentPlans.list();
  //   })
  //   .then(commitmentPlans => {
  //     console.log('List of commitmentPlans:');
  //     console.dir(commitmentPlans, { depth: null, colors: true });
  //     res.render("success");
  //   });
  request({
    headers: headers,
    uri: url,
    body: JSON.stringify({
      Inputs: input,
      GlobalParameters: {}
    }),
    method: 'POST'
  }, async (err, res, body) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      console.log("haha");
      console.log(body);
    }
  });
});

module.exports = router;
