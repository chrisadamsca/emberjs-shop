import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('products', {path: '/'});
  this.route('product', {path: 'products/:product_id'});
  this.route('cart');
  this.route('boys');
  this.route('boy-cat', {path: 'boys/:cat_name'});
  this.route('girl-cat', {path: 'girls/:cat_name'});
  this.route('catchall', {path: '/*wildcard'});
  this.route('girls');
  this.route('register');
});

export default Router;
