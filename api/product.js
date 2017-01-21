/* ca033 */

var Product = require('../models/product');
var logger =  require('../logger.js');

// Liefert alle Produkte
module.exports.getAllProducts = function(req, res) {
    Product.find(function(err, products) {
        if (err) {
          logger.logWarn("Accessing product that does not exist");
          return;
        }
        res.json({products: products});
    });
};

// Liefert ein bestimmtes Produkt durch die ID
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


// Liefert alle Produkte für das jeweilige Geschlecht
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

// Liefert alle Produkte in einer bestimmten Kategorie
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

// Fügt ein Produkt hinzu
module.exports.addProduct = function(req,res) {
    var product = new Product(req.body.product);
    product.save(function(err) {
        if (err) {
            res.send(err);
          logger.logWarn("Couldn't save Product");
          return;
        }
        res.json({product: product});
    });
};
