var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: String,
    description: String,
    size: String,
    imgUrl: String,
    price: Number,
    rating: Number,
});


module.exports = mongoose.model('Product', ProductSchema);
