const path = require("path");

const productController = {
    print: (req, res) => {
        let path_product = path.resolve(__dirname, "../views/product.ejs");

        res.render(path_product);
    },
};

module.exports = productController;
