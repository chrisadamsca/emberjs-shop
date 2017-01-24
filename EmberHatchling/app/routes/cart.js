/* df029 */

import Ember from 'ember';

export default Ember.Route.extend({
	cart: Ember.inject.service(),
	model(){
		//providing own model 
		const cart = this.get('cart');
		return cart;
	},
	actions: {
		//Provide the action for button to remove the item from cart
	    removeFromCart(item) {
	      this.get('cart').remove(item);
	    },
		//Provide the action for button to add the item to cart
		addToCart(item) {
			this.get('cart').addItem(item);
		}
    }
	
});
