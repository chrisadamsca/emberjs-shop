define('hatchling/tests/routes/orders.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/orders.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/orders.js should pass jshint.');
  });
});