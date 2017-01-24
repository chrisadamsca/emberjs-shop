/* df029 */

import Ember from 'ember';

export default Ember.Component.extend({
	//Injecting different services, so I get the model and can use the methods
    store: Ember.inject.service(),
    session: Ember.inject.service('session'),
    cart: Ember.inject.service(),
    routing: Ember.inject.service('-routing'),

    actions: {
    order(items) {
    	//Creating order array with user details, product IDs and quantities that is NOT an ember array. (Otherwise sending is not possible)
	    var order = {
	        "details": {
	          "userID":"123",
	          "itemList": []
	        }
	    };

	    for(var i = 0; i < items.length; i++){
	        order.details.itemList.push({"produktID":items[i].get('name'),"quantity":items[i].get('quantity')});
	    }

	    //Send order to server
	    $.post("/api/buy", {
	        data: JSON.stringify(order)
	    });

	    //Empty cart and go to order confirmation site.
	    this.get("cart").empty();
	    this.get("routing").transitionTo("orderconfirmation");
    }
  }
});
