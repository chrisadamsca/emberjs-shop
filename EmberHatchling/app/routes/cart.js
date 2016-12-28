import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		const cart = this.get('cart');
		return cart;
	},
	cart: Ember.inject.service()
});
