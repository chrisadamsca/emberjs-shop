/* df029 */

import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
  	return this.get('store').findRecord('product', params.product_id);
  },
  actions:
  {
    error:function()
    {
      this.transitionTo('catchall','application-error');
    }
  }
});
