/* ca033 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    password: String,
    name: String,
    surname: String,
    address: String
});

module.exports = mongoose.model('User', UserSchema);
