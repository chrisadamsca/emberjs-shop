define('hatchling/tests/routes/order.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/order.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/order.js should pass jshint.');
  });
});