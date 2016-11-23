var products = require('../api/product');

module.exports = function(router) {

  router.route('/api/products')
    .post(function(req, res) {
        console.log(req.body);
        products.addProduct(req,res);
    })
    .get(function(req,res) {
        products.getAllProducts(req,res)
    });

  router.route('/api/products/:product_id')
    .get(function(req,res) {
			products.getProduct(req.params.product_id, req, res);
    });

  router.route('*').get(function(req, res) {
      res.sendfile('./public/index.html');
  });

};
