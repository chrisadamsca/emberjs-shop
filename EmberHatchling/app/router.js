import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('products');
  this.route('product', {path: 'products/:product_id'});
  this.route('cart');
  this.route('login');
  this.route('boys');
  this.route('catchall', {path: '/*wildcard'});
});

export default Router;
