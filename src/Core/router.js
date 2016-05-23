(function (App) {

	"use strict";
	var mainBox = document.querySelector(".main-box");

	if (!mainBox) {
		mainBox = document.createElement("div");
		mainBox.classList.add("main-box");
		$("body").append(mainBox);
	}

	App.Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'problem/:id': 'problem'
		},
		home: function () {
			var home = new App.Views.HomeView();
			var rHome = home.render();
		},
		problem: function (id) { 
			var problem = new App.Views.Problem(id);
			var rProblem = problem.render();
		}
	});


})(App);