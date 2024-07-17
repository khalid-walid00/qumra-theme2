const client = require("../../utils/qumraClient");

module.exports = async (req, res, next) => {
  const products = (await client.getProducts({ limit: 10, page: 1 }))?.data;
  res.render("home.njk", { products })
}