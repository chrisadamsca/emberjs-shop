import Ember from 'ember';

export default Ember.Route.extend({
  model(){
  	return this.get('store').findRecord('product', '58354d77e4670512dcfd5a41');
  }
});
