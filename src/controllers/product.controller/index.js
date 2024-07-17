const client = require("../../utils/qumraClient");

module.exports = async (req, res, next) => {
    const {slug} = req.params
    const product = (await client.getProduct({ slug })).data;
    res.render("product.njk", product)
  }