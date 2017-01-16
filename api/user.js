var User = require('../models/user');
var logger =  require('../logger.js');
var bcrypt = require('bcrypt');

const saltRounds = 10;

// Fügt einen Benutzer hinzu
module.exports.addUser = function(req,res) {
    var data = req.body.user;
    data.password = bcrypt.hashSync(data.password, saltRounds);
    var user = new User(data);
    user.save(function(err) {
        if (err) {
          res.send(err);
          logger.logWarn("User couldn't be added");
          return;
        }
        res.json({user: user});
    });
};

// Findet einen bestimmten User durch seine E-Mail
module.exports.getUser = function(email, password, req, res) {
    var email = email;
    var password = password;
    return User.find({ 'email': email }, function(err, user) {
        if (err) {
          res.send(err);
          logger.logWarn("Connection Error");
          return;
        }
        if (user === undefined || user.length == 0) {
          logger.logWarn("No User with email " + email + " found");
          return;
        }
        if(!bcrypt.compareSync(password, user[0].password)){
          logger.logWarn("No User with email " + email + " and provided password found");
          return;
        }

        var token = bcrypt.hashSync(user[0].email, saltRounds);

        logger.log("User "+ email + " logged in! Token: " + token );
        res.send({ access_token: token });
    });
};
