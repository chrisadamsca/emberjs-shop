define('hatchling/tests/helpers/resolver', ['exports', 'hatchling/resolver', 'hatchling/config/environment'], function (exports, _hatchlingResolver, _hatchlingConfigEnvironment) {

  var resolver = _hatchlingResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _hatchlingConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hatchlingConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});