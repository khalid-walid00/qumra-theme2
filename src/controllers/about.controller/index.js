module.exports = async (req, res, next) => {
    const response = await fetch("https://api.qumra.cloud/products/getall");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const product = (await response.json()).data[0];
    res.render("about.njk", {product})
  }