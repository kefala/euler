(function (App) {

	"use strict";

	$(document).ready(function () {
		new App.Router();
		Backbone.history.start();
	});

})(App);