/* df029, nk078, ca033 */

import Ember from 'ember';

export default Ember.Service.extend({
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
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').clear();
  }

});
