(function (App) {

	"use strict";

	function printTemplate(template) {
		if (!(typeof(template) === 'object' || typeof(template) === 'string')) throw "Invalid parameter in function printTemplate";

		var mainBox = document.querySelector(".main-box");
		
		if (!mainBox) {
			mainBox = document.createElement("div");
			mainBox.classList.add("main-box");	
		}

		$(mainBox).append(template);
		$("body").append(mainBox);
	}
	
	App.Router = Backbone.Router.extend({
		routes: {
			'': 'home'
		},
		home: function(){
			
			var home = new App.Views.HomeView();
			var rHome = home.render();
			
			printTemplate([rHome.el]);
			
			//$(document.body).append("Index route has been called..");
		}
	});


})(App);