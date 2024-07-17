const express = require("express");
const Router = express.Router();

Router.use("/" , require("./home.router"))
Router.use("/product" , require("./product.router"))
Router.use("/products" , require("./products.router"))
Router.use("/page" , require("./page.router"))
Router.use("/about" , require("./about.router"))

module.exports = Router;