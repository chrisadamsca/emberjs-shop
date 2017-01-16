var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    date: { type: Date, default: Date.now },
    details: Schema.Types.Mixed
});

module.exports = mongoose.model('Order', OrderSchema);
