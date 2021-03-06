/* ca033 */

var User = require('../models/user');
var logger =  require('../logger.js');
var bcrypt = require('bcrypt');

const saltRounds = 10;

// Fügt einen Benutzer hinzu
module.exports.addUser = function(req,res) {
  var data = req.body.user;

  // Wenn keine Daten gesendet wurden:
  if(data === undefined || data.length == 0){
    res.status(409).send("Es wurden keine Daten gesendet");
    logger.logWarn("No Data was sent from registration");
    return;
  }

  // Stelle eine Anfrage an die User-Datenbank
  return User.find({ 'email': data.email }, function(err, user) {
      if (err) {
        res.status(500);
        logger.logWarn("Connection Error");
        return;
      }
      // Wenn es den Benutzer noch nicht gibt
      if (user === undefined || user.length == 0) {
        // Passwort Verschlüsselung
        data.password = bcrypt.hashSync(data.password, saltRounds);
        // Speichere neuen Benutzer in die Datenbank
        var newUser = new User(data);
        newUser.save(function(err) {
            if (err) {
              res.send(err);
              logger.logWarn("User couldn't be added");
              return;
            }
            // Füge neuen Benutzer hinzu
            logger.log("User " + data.email + " added");
            res.json({user: newUser});
        });
        return;
      }

      // Wenn es den Benutzer bereits gibt
      res.status(409).send("Diese E-Mail-Adresse ist bereits registriert");
      logger.logWarn("User tried to register with already existing email");
      return;
  });

};

// Findet einen bestimmten User durch seine E-Mail
module.exports.loginUser = function(email, password, req, res) {
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
          res.status(400).send('{"error": "Benutzername und zugehöriges Passwort stimmen nicht überein"}');
          return;
        }
        if(!bcrypt.compareSync(password, user[0].password)){
          logger.logWarn("No User with provided email " + email + " and password found");
          res.status(400).send('{"error": "Benutzername und zugehöriges Passwort stimmen nicht überein"}');
          return;
        }

        var token = bcrypt.hashSync(user[0].email, saltRounds);

        logger.log("User "+ email + " logged in! Token: " + token );
        res.send({ access_token: token, name: user[0].name, surname: user[0].surname });
    });
};
