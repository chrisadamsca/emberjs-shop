/* df029 */

import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
    session: Ember.inject.service('session'),
  actions: {
    order(items) {
      var order = {
        "details": {
          "userID":"123",
          "itemList": []
        }
      };

    for(var i = 0; i < items.length; i++){
      order.details.itemList.push({"produktID":items[i].get('name'),"quantity":items[i].get('quantity')});
    }

    $.post("/api/buy", {
      data: JSON.stringify(order)
    });

    }
  }
});
