const path = require('path');

const subscribeController = {
    print : (req, res) => {
        let path_subscribe = path.resolve(__dirname, "../views/subscribe.html");
    
        res.sendFile(path_subscribe);
    }
};

module.exports = subscribeController;
