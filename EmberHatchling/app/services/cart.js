import Ember from 'ember';

export default Ember.Service.extend({
  items: null,
  sum: null,

  init() {
    this._super(...arguments);
    this.set('items', []);
    this.set('sum', 0)
  },

  add(newItem) {
    sum += newItem.price;

    for(var i=0; i<this.get('items').length; i++){
      if(this.get('items')[i].id === newItem.id){
        this.get('items')[i].quantity++;
        return;
      } 
    }
    newItem.quantity = 1;
    console.log(newItem.quantity);
    this.get('items').pushObject(newItem);
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').clear();
  }
});