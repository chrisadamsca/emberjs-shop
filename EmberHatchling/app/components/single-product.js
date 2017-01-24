/* df029 */

import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),

  actions: {
  	//pass the item from button to cart service add method
    addToCart(item) {
      this.get('cart').add(item);
    }
  }
});
