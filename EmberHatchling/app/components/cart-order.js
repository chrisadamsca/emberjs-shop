//Darja Ferber
import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
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



    // console.log("Items:");
    // console.log(this.get('cart').ordernow());
    //   this.get('cart').order(items);

      /*$.ajax({
		    	type: "POST",
		        url: "/api/buy",
		        data: { items }
		    });*/

    }
  }
  	/*actions:
    {
	    order:function(items)
	    {
	    	//const cart = this.get('cart');
	      	$.ajax({
		    	type: "POST",
		        url: "/api/buy",
		        data: {test: items }
		    });
	    }
    }*/

  	/*
	actions: {
		order() {
	    // /api/buy
	    $.ajax({
	        type: "POST",
	        url: "/api/buy",
	        data: { items: this.get('items') }
	      });
	  }
	}*/
});
