/* an034 */

import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  currentUser: service(),
  session: service('session'),
  sessionAuthenticated() {
    this.transitionTo('/');
    console.log(this.get('session.data.authenticated.name'));
  },

  _loadCurrentUser() {
    return this.get('currentUser').load();
  },

  model(){
		const cart = this.get('cart');
		return cart;
	},

  cart: Ember.inject.service()
});
