const path = require("path");

const indexController = {
    print: (req, res) => {
        let path_index = path.resolve(__dirname, "../views/index.ejs");
        res.render(path_index);
    },
};

module.exports = indexController;
