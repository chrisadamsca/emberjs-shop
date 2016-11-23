var Product = require('../models/product');

module.exports.getAllProducts = function(req, res) {
    Product.find(function(err, products) {
        if (err) {
            res.send(err);
        }
        res.json({products: products});
    });
};

module.exports.getProduct = function(req, res) {
    Product.findById(req.params.bear_id, function(err, product) {
        if (err) {
          res.send(err);
        }
        res.json({product: product});
    });
};

module.exports.addProduct = function(req,res) {
    var product = new Product(req.body.product);
    product.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({product: product});
    });
};