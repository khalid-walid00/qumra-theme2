const client = require("../../utils/qumraClient");

module.exports = async (req, res, next) => {
    const {slug} = req.params
    const product = (await client.getProduct({ slug })).data;
    console.log("🚀 ~ module.exports= ~ product:", product)
    res.render("product", {product})
  }