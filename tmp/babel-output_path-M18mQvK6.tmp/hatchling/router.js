define('hatchling/router', ['exports', 'ember', 'hatchling/config/environment'], function (exports, _ember, _hatchlingConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _hatchlingConfigEnvironment['default'].locationType,
    rootURL: _hatchlingConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('orders');
  });

  exports['default'] = Router;
});