import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		const cart = this.get('cart');
		return cart.items;
	},
	cart: Ember.inject.service()
});
