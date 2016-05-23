(function (MainLayout) {

	"use strict";

	var Home = Backbone.View.extend({

		tagName: "div",

		className: "home-section box-container",

		events: {
		},

		components: [],

		initialize: function () {
			if (!$(".main-layout").length) {
				var main = new MainLayout();
				var rMain = main.render();
			}
		},

		render: function () {
			$.get(App.Config.views.templateFolder + '/view.home.html', function (response) {
				$(".main-layout").find('#box-content').html(response);
			});

			return this;
		}
	});

	App.Views.HomeView = Home;

})(window.App.Components.MainLayout); 