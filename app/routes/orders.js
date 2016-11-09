import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [
			{id: '1', name: 'Lisa'},
			{ id: '2', name: 'Elena'}
		];
	}
});
