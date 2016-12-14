import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
	model(){
		const cart = this.get('cart');
		return cart.items;
	},
	cart: Ember.inject.service()
});

export default Ember.Route.extend(AuthenticatedRouteMixin);
