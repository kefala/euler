(function (App) {

	"use strict";

	App.Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'facha': 'facha'
		},
		index: function(){
			$(document.body).append("Index route has been called..");
		},
		facha: function(){
			$(document.body).append("facha route has been called..");
		}
	});
	

})(App);