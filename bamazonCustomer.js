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
// Show inventory and call userPurchase()
function queryAllProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
    }
    console.log("-----------------------------------");
    userPurchase();
  });
};
// prompt user inputs, validate input, check for suffiecient stock, update stock
function userPurchase() {
  // Set up user inputs to ask for item_id and stock_quantity
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
  ]).then(function (answer) {
    // Retrieve the item requested and its quantity instock?????????????
    // itemReq and stockReq are returning the user inputs
    var itemReq = answer.item_id;
    console.log(itemReq);
    var stockReq = answer.stock_quantity;
    console.log(stockReq);

    connection.query("SELECT * FROM products WHERE ?", { item_id: itemReq }, function (err, res) {
      if (err) throw err;
      // Check stock_quantity vs stockReq to see if it can be fulfilled
      if (stockReq <= res[0].stock_quantity) {
        console.log('Your item is in stock and is ready to order.');
        // Update stock quanity.
        connection.query("UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: res[0].stock_quantity - stockReq
            },
            {
              item_id: itemReq
            }
          ],
        function (err) {
            if (err) throw err;
            console.log(res[0].stock_quantity);
            // Get price and total order price.
          }
        );
      } else {
        console.log('Your order cannot be fulfilled at this time. Current stock of item ' + itemReq + " is " + res[0].stock_quantity)
      }
    })
  })
}
