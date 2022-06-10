const path = require("path");

const indexController = {
    print: (req, res) => {
        let path_index = path.resolve(__dirname, "../views/index.html");
        res.sendFile(path_index);
    },
};

module.exports = indexController;
