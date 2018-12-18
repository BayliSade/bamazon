var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "pass",
  database: "bamazon"
});

connection.connect(function (err) {
  // if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to buy?",
        choices: [
          "Pineapples",
          "Apple Air Pods",
          "Peaches",
          "Macbook",
          "Pens",
          "Coconut Oil",
          "Pixel 3 XL",
          "IPhone",
          "NotePad",
          "Hoodie"
        ]
      },
      {
          name: "qnty",
          type: "list",
          message: "How many units of the product do you want to buy?",
          choices: [
            "1",
            "2",
            "3",
            "4",
            "5"
          ]
        }
    ])

    .then(function (answer) {
      switch (answer.action) {
        case "Pineapples":
          // unitBuy();
          break;
        case "Apple Air Pods":
          // unitBuy();
          break;
        case "Peaches":
          // unitBuy();
          break;
        case "Macbook":
          // unitBuy();
          break;
        case "Pens":
          // unitBuy();
          break;
        case "Coconut Oil":
          // unitBuy();
          break;
        case "Pixel 3 XL":
          // unitBuy();
          break;
        case "IPhone":
          // unitBuy();
          break;
        case "NotePad":
          // unitBuy();
          break;
        case "Hoodie":
          // unitBuy();
          break;
      }
      switch (answer.qnty) {
        case "1":
          // unitBuy();
          break;
        case "2":
          // unitBuy();
          break;
        case "3":
          // unitBuy();
          break;
        case "4":
          // unitBuy();
          break;
        case "5":
          // unitBuy();
          break;
      }
    });
}
