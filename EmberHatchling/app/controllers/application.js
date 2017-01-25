/* an034 */

import Ember from 'ember';

const { inject: { service }, Controller } = Ember;

export default Controller.extend({
  session: service('session'),
  
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
