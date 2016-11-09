define('hatchling/app', ['exports', 'ember', 'hatchling/resolver', 'ember-load-initializers', 'hatchling/config/environment'], function (exports, _ember, _hatchlingResolver, _emberLoadInitializers, _hatchlingConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _hatchlingConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hatchlingConfigEnvironment['default'].podModulePrefix,
    Resolver: _hatchlingResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _hatchlingConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});