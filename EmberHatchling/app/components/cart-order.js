//Darja Ferber
import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),

  actions: {
    order(items) {
    console.log("Items:");
    console.log(items);
      this.get('cart').order(items);
      
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
