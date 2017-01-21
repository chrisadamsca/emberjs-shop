/* df029 */

import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service('session'),
    routing: Ember.inject.service('-routing'),
    cart: Ember.inject.service(),

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

	    this.get("cart").empty();
	    this.get("routing").transitionTo("orderconfirmation");
    }
  }
});
