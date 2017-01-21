/* ca033 */

var Order = require('../models/order');
var logger =  require('../logger.js');

// Speichert eine Order in der Datenbank
module.exports.addOrder = function(req,res) {
    data = JSON.parse(req.body.data);
    var order = new Order(data);
    order.save(function(err) {
        if (err) {
          res.send(err);
          logger.logWarn("Order couldn't be placed");
          return;
        }
        res.json({order: order});
    });
};
