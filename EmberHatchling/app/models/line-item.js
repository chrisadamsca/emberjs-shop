import DS from 'ember-data';

export default DS.Model.extend({
	order: DS.belongsTo('order'),
	product: DS.belongsTo('product'),
	quantity: DS.attr('number'),
	subTotal: function() {
    	return this.get('product').get('price') * this.get('quantity');
  	}.property('product', 'quantity')
});
