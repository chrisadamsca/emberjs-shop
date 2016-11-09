define('hatchling/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'hatchling/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _hatchlingConfigEnvironment) {
  var _config$APP = _hatchlingConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});