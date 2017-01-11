var User = require('../models/user');
var logger =  require('../logger.js');

// Fügt einen Benutzer hinzu
module.exports.addUser = function(req,res) {
    var user = new User(req.body.user);
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
    return User.find({ 'email': email, 'password': password }, function(err, user) {
        if (err) {
          res.send(err);
          logger.logWarn("Connection Error");
          return;
        }
        if (user === undefined || user.length == 0) {
          logger.logWarn("No User with email " + email + " and provided password found");
          return;
        }
        logger.log("User "+ email + " logged in! Token: token"+email );
        res.send({ access_token: "token"+email });
    });
};
