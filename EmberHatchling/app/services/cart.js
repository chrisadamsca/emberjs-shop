/* df029, nk078, ca033 */

import Ember from 'ember';

export default Ember.Service.extend({
  //Injecting routing for transition-to
  routing: Ember.inject.service('-routing'),

  /*items Array with items in the cart (if you have an item two times, it doesn't change), 
  totalPrice is the sum and an 
  itemCount that counts how many items are really in the cart.*/
  items: null,
  totalPrice: 0,
  itemCount: 0,

  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  //Adding new Item that gets passed to from the button. 
  add(newItem) {
    this.set('totalPrice', this.get('totalPrice') + newItem.get('price'));
    this.set('itemCount', this.get('itemCount') + 1);

    //How often is an item with same product id in the cart
    for(var i=0; i<this.get('items').length; i++){
      if(this.get('items')[i].id === newItem.id){
        this.get('items')[i].quantity++;
        return;
      }
    }

    newItem.quantity = 1;
    this.get('items').pushObject(newItem);
  },
  
  //Remove item from cart 
  remove(item) {
    //Updating variables / item array
    this.set('totalPrice', this.get('totalPrice') - item.get("price"));
    this.set('itemCount', this.get('itemCount') - 1);
    item.set('quantity', item.get('quantity')-1);

    //Remove item from array, if there is no item with this product id in the cart
    if(item.get('quantity') <= 0) {
      this.get('items').removeObject(item);
    }

    //forward the user to the products page if there if he has removed all products from cart
    if(this.get('itemCount') <= 0) {
      this.get("routing").transitionTo("products");
    }
  },
  addItem(item) {
    this.set('totalPrice', this.get('totalPrice') + item.get("price"));
    this.set('itemCount', this.get('itemCount') + 1);
    item.set('quantity', item.get('quantity') + 1);
  },
  //Clear the cart.
  empty() {
    this.get('items').clear();
    this.set('totalPrice', 0);
    this.set('itemCount', 0);
  }

});
