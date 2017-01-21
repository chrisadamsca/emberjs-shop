/* df029 */

import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		const cart = this.get('cart');
		return cart;
	},
	actions: {
    removeFromCart(item) {
      this.get('cart').remove(item);
    },
		addToCart(item) {
			this.get('cart').addItem(item);
		}
  },
	cart: Ember.inject.service()
});
