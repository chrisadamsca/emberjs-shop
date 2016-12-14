var Product = require('../models/product');
var logger =  require('../logger.js')

module.exports.getAllProducts = function(req, res) {
    Product.find(function(err, products) {
        if (err) {
            res.send(err);
          logger.logWarn("Accessing product that does not exist");
          return;
        }
        res.json({products: products});
    });
};

module.exports.getProduct = function(id, req, res) {
    Product.findById(id, function(err, product) {
        if (err) {
          res.send(err);
          logger.logWarn("Accessing product that does not exist");
          return;
        }
        res.json({product: product});
    });
};

module.exports.getByGender = function(gender, req, res) {
    Product.find({ 'category.gender': gender }, function(err, product) {
        if (err) {
          res.send(err);
          logger.logWarn("Accessing product that does not exist");
          return;
        }
        res.json({product: product});
    });
};

module.exports.getByCategory = function(gender, name, req, res) {
    Product.find({ 'category.gender': gender, 'category.name': name }, function(err, product) {
        if (err) {
          res.send(err);
          logger.logWarn("Accessing product that does not exist");
          return;
        }
        res.json({product: product});
    }).where('category.name', name);
};

module.exports.addProduct = function(req,res) {
    var product = new Product(req.body.product);
    product.save(function(err) {
        if (err) {
            res.send(err);
          logger.logWarn("Accessing product that does not exist");
          return;
        }
        res.json({product: product});
    });
};
