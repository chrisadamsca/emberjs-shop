/* df029, nk078, ca033 */

import Ember from 'ember';

export default Ember.Service.extend({
  routing: Ember.inject.service('-routing'),
  items: null,
  totalPrice: 0,
  itemCount: 0,

  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  add(newItem) {
    this.set('totalPrice', this.get('totalPrice') + newItem.get('price'));
    this.set('itemCount', this.get('itemCount') + 1);

    for(var i=0; i<this.get('items').length; i++){
      if(this.get('items')[i].id === newItem.id){
        this.get('items')[i].quantity++;
        return;
      }
    }

    newItem.quantity = 1;
    this.get('items').pushObject(newItem);
  },
  
  remove(item) {
    this.set('totalPrice', this.get('totalPrice') - item.get("price"));
    this.set('itemCount', this.get('itemCount') - 1);
    item.set('quantity', item.get('quantity')-1);

    if(item.get('quantity') <= 0) {
      this.get('items').removeObject(item);
    }

    if(this.get('itemCount') <= 0) {
      this.get("routing").transitionTo("products");
    }
  },
  addItem(item) {
    this.set('totalPrice', this.get('totalPrice') + item.get("price"));
    this.set('itemCount', this.get('itemCount') + 1);
    item.set('quantity', item.get('quantity') + 1);
  },

  empty() {
    this.get('items').clear();
    this.set('totalPrice', 0);
    this.set('itemCount', 0);
  }

});
