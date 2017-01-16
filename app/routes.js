var products = require('../api/product');
var users = require('../api/user');
var orders = require('../api/order');
var logger = require('../logger.js');

module.exports = function(router) {

  router.route('/api/products')
    .post(function(req, res) {
			console.log(req.body);
      products.addProduct(req,res);
    })
    .get(function(req,res) {
      if(req.query.name && req.query.gender){
        products.getByCategory(req.query.gender, req.query.name, req, res);
        return;
      }
      if(req.query.gender){
        products.getByGender(req.query.gender, req, res);
        return;
      }
      products.getAllProducts(req,res)
    });

	router.route('/api/products/:product_id')
		.get(function(req,res) {
			products.getProduct(req.params.product_id, req, res);
		});

  router.route('/api/products/category/:gender/:cat')
  	.get(function(req,res) {
  		products.getByCategory(req.params.gender, req.params.cat, req, res);
  	});

    router.route('/api/buy')
    .post(function(req, res) {
      orders.addOrder(req,res);
		  logger.log(JSON.stringify(req.body));
      res.send(req.body);
    });

  router.route('/api/token')
    .post(function(req, res) {
      users.getUser(req.body.username, req.body.password, req, res);
    });


  router.route('/api/user')
    .post(function(req, res) {
			console.log(req.body);
      users.addUser(req,res);
    });
    router.route('/api/user/:email/:password').get(function(req,res) {
      users.getUser(req.params.email, req.params.password, req, res);
    });


  router.route('*').get(function(req, res) {
    res.sendfile('./public/index.html');
  });


};
