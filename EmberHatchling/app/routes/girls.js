/* ca033 */

import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').query('product', {gender: 'girls'});
  }
});
