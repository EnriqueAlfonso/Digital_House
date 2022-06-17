const path = require('path');

const subscribeController = {
    print : (req, res) => {
        let path_subscribe = path.resolve(__dirname, "../views/subscribe.ejs");
    
        res.render(path_subscribe);
    }
};

module.exports = subscribeController;
