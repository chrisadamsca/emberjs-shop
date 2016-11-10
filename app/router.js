import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orders');
  this.route('products', function(){
  	this.route('product', {path: '/:product_id'});
  });
  this.route('users');
  this.route('user');
}); 

export default Router;
