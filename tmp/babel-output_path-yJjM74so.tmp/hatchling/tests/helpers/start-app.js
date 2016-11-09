define('hatchling/tests/helpers/start-app', ['exports', 'ember', 'hatchling/app', 'hatchling/config/environment'], function (exports, _ember, _hatchlingApp, _hatchlingConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _hatchlingConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _hatchlingApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});