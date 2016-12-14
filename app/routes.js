var products = require('../api/product');
var logger = require('../logger.js')

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

  router.route('/token')
    .post(function(req, res) {
      if (req.body.username == 'login' && req.body.password == 'ok') {
        res.send({ access_token: "some bs" });
      } else {
        res.status(400).send({ error: "Username oder Passwort sind falsch" });
      }
    });

  router.route('*').get(function(req, res) {
    res.sendfile('./public/index.html');
  });

};
