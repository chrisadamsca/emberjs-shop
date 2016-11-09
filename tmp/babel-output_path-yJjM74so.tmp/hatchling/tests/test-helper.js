define('hatchling/tests/test-helper', ['exports', 'hatchling/tests/helpers/resolver', 'ember-qunit'], function (exports, _hatchlingTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_hatchlingTestsHelpersResolver['default']);
});