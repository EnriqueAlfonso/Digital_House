const path = require('path');

const loginController = {
    print : (req, res) => {
        let path_login = path.resolve(__dirname, "../views/login.ejs");
    
        res.render(path_login);
    }
};

module.exports = loginController;
