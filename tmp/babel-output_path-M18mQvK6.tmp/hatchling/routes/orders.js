define('hatchling/routes/orders', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return [{ id: '1', name: 'Lisa' }, { id: '2', name: 'Elena' }];
		}
	});
});