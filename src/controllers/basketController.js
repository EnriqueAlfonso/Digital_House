const path = require('path');

const basketController = {
    print : (req, res) => {
        let path_basket = path.resolve(__dirname, "../views/basket.ejs");
    
        res.render(path_basket);
    }
}

module.exports = basketController;
