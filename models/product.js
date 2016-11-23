var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: String,
    description: String,
    size: String,
    imgUrl: String,
    category: {
      gender: { type: String, lowercase: true},
      name: { type: String, lowercase: true}
    },
    price: Number,
    rating: Number
});


module.exports = mongoose.model('Product', ProductSchema);
