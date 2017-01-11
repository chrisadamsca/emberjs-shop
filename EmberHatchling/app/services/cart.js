//Darja Ferber
import Ember from 'ember';

export default Ember.Service.extend({
  items: null,
  prices: Ember.computed.mapBy('items', 'price'),
  sum: Ember.computed.sum('prices'),

  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  add(newItem) {
    //Nils & Darja
    for(var i=0; i<this.get('items').length; i++){
      if(this.get('items')[i].id === newItem.id){
        this.get('items')[i].quantity++;
        return;
      } 
    }
//Darja Ferber
    newItem.quantity = 1;
    console.log(newItem.quantity);
    this.get('items').pushObject(newItem);
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').clear();
  },

  order() {
    // /api/buy
    $.ajax({
        type: "POST",
        url: "/api/buy",
        data: { items: this.get('items') }
      })
      this.transitionTo('/');

  }

});