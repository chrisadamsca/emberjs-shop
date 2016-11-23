import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [
			{id:'1', name: 'Grünes Kleid', description: 'Grünes Kleid mit blauer Jacke', price: '15 Euro', url: '/assets/images/products/Kleidung_01.png'},
			{id:'2', name: 'Grünes Kleid', description: 'Grünes Kleid mit blauer Jacke', price: '15 Euro', url: '/assets/images/products/Kleidung_02.png'},
			{id:'3', name: 'Grünes Kleid', description: 'Grünes Kleid mit blauer Jacke', price: '15 Euro', url: '/assets/images/products/Kleidung_03.png'},
			{id:'4', name: 'Grünes Kleid', description: 'Grünes Kleid mit blauer Jacke', price: '15 Euro', url: '/assets/images/products/Kleidung_04.jpg'},
			{id:'5', name: 'Grünes Kleid', description: 'Grünes Kleid mit blauer Jacke', price: '15 Euro', url: '/assets/images/products/Kleidung_05.jpg'},
		];
    // return this.get('store').query('product', {});
	}
});
