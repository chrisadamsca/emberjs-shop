var products = require('../api/product');
var users = require('../api/user');
var orders = require('../api/order');
var logger = require('../logger.js');

module.exports = function(router) {

// Produkte
  router.route('/api/products')
    // Fügt neues Produkt hinzu
    .post(function(req, res) {
			console.log(req.body);
      products.addProduct(req,res);
    })
    // Findet Produkt nach ihrer Kategorie
    .get(function(req,res) {
      if(req.query.name && req.query.gender){
        products.getByCategory(req.query.gender, req.query.name, req, res);
        return;
      }
      // Findet Produkt nach ihrem Geschlecht
      if(req.query.gender){
        products.getByGender(req.query.gender, req, res);
        return;
      }
      // Liefert alle Produkte
      products.getAllProducts(req,res)
    });

  // Liefert ein Produkt anhand der Produkt-Id
	router.route('/api/products/:product_id')
		.get(function(req,res) {
			products.getProduct(req.params.product_id, req, res);
		});

  // router.route('/api/products/category/:gender/:cat')
  // 	.get(function(req,res) {
  // 		products.getByCategory(req.params.gender, req.params.cat, req, res);
  // 	});

// Bestellungen
  router.route('/api/buy')
  .post(function(req, res) {
    orders.addOrder(req,res);
	  logger.log(JSON.stringify(req.body));
    res.send(req.body);
  });

// Anmeldung
  router.route('/api/token')
    .post(function(req, res) {
      users.loginUser(req.body.username, req.body.password, req, res);
  });

// Benutzer
  // Fügt neuen Benutzer hinzu
  router.route('/api/user')
    .post(function(req, res) {
			console.log(req.body);
      users.addUser(req,res);
    });

  // router.route('/api/user/:email/:password')
  //   .get(function(req,res) {
  //     users.getUser(req.params.email, req.params.password, req, res);
  //   });


  router.route('*').get(function(req, res) {
    res.sendfile('./public/index.html');
  });


};
