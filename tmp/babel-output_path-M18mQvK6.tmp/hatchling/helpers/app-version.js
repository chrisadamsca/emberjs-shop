define('hatchling/helpers/app-version', ['exports', 'ember', 'hatchling/config/environment'], function (exports, _ember, _hatchlingConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _hatchlingConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});