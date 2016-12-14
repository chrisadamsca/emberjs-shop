import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').query('product', {gender: 'girls', name: params.cat_name});
  }
});
