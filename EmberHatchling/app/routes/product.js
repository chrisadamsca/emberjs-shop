import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
  	return this.get('store').findRecord('product', params.product_id);
  },
  cart: Ember.inject.service(),
  actions: {
  	add(item){
  		this.get('cart').add(item);
  	}
  }
});
