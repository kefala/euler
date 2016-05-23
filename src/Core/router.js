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
			'': 'home',
			'problem-one': 'problemOne'
		},
		home: function(){
			var home = new App.Views.HomeView();
			var rHome = home.render();
			
			printTemplate([rHome.el]);			
		},
		problemOne: function(){
			var problemOne = new App.Views.ProblemOne();
			var rProblemOne = problemOne.render();
			
			printTemplate([rProblemOne.el]);			
		}
	});


})(App);