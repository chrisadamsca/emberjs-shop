/* an034 */

import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: service('session'),
  cart: Ember.inject.service(),

  sessionAuthenticated() {
    this.transitionTo('/');
  },

  model(){
		const cart = this.get('cart');
		return cart;
	}

});
