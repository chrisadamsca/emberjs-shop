/* df029 */

import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    //Find the product with params.product_id defined in the router.js
  	return this.get('store').findRecord('product', params.product_id);
  },
  actions:
  {
    //if product doesn't exist go to 404 page
    error:function()
    {
      this.transitionTo('catchall','application-error');
    }
  }
});
