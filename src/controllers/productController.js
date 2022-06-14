const path = require("path");

const productController = {
    print: (req, res) => {
        let path_product = path.resolve(__dirname, "../views/product.html");

        res.sendFile(path_product);
    },
};

module.exports = productController;
