var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllProducts();
});

function queryAllProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
    }
    console.log("-----------------------------------");
    userPurchase();
  });
}
// Set up user inputs to ask for item_id and stock_quantity
function userPurchase() {
  inquirer.prompt([
    {
    name: "item_id",
    type: "input",
    message: "Enter item_id please.",
    validate: function (value) {
      if (isNaN(value) === false) {
        return true;
      }
      return "Please insert integer.";
    },
    filter: Number
  }, {
    name: "stock_quantity",
    type: "input",
    message: "How many would you like?",
    validate: function (value) {
      if (isNaN(value) === false) {
        return true;
      }
      return "Please insert integer.";
    },
    filter: Number
  }
  ])
}
// TO DO:Query DB to make sure the user input is less than the stock quanity