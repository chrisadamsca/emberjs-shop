import Ember from 'ember';

export default Ember.Service.extend({
  items: null,

  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  add(newItem) {
    for(var i=0; i<this.get('items').length; i++){
      if(this.get('items')[i].id === newItem.id){
        this.get('items')[i].quantity++;
        return;
      } 
    }
    console.log("else");
    newItem.quantity = 1;
    console.log(newItem.quantity);
    this.get('items').pushObject(newItem);
    console.log( this.get('items')[0].quantity);
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').clear();
  }
});