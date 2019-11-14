DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price VARCHAR(45) NULL,
  stock_quantity INT Null,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pants", "clothes", "64.99", 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "clothes", "14.99", 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flip Flops", "shoes", "19.99", 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Watch", "jewlery", "164.99", 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jacket", "clothes", "44.99", 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "electronics", "1964.99", 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Headphones", "electronics", "99.99", 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Speaker", "electronics", "164.99", 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sunglasses", "fashion", "264.99", 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Necklace", "jewlery", "164.99", 100);