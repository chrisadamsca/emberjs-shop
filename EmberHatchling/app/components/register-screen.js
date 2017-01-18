import Ember from 'ember';

export default Ember.Component.extend({

  session: Ember.inject.service('session'),

  actions: {
    register() {
      var that = this;
      if(this.get("password") !== this.get("re-password")){
        return;
      }
      var formData = {
          "name":this.get("name"),
          "surname":this.get("surname"),
          "email":this.get("email"),
          "password":this.get("password"),
          "address":this.get("address")
      }

      $.post("/api/user", {
        user: formData
      }).then(function(data) {
        that.get('session').authenticate('authenticator:oauth2', formData.email, formData.password).catch((reason) => {
          that.set('errorMessage', reason.error || reason);
        });
      }, function(data) {
        $('#error').text(data.responseText);
      }.bind(this));
    }
  }
});
