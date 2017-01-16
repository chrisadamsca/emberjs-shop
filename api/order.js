var Order = require('../models/order');
var logger =  require('../logger.js');

// Speichert eine Order in der Datenbank
module.exports.addOrder = function(req,res) {
    var order = new Order(req.body.order);
    order.save(function(err) {
        if (err) {
          res.send(err);
          logger.logWarn("Order couldn't be placed");
          return;
        }
        res.json({order: order});
    });
};
