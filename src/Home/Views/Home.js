(function (MainLayout) {
	
	"use strict";

	var Home = Backbone.View.extend({

		tagName: "div",

		className: "home-section box-container",

		events: {
		},

		components: [],

		initialize: function () {
			var that = this;
			that.main = new MainLayout();
		},

		render: function () {
			var that = this;
			var rMain = that.main.render();
			that.$el.html(rMain.el);

			$.get(App.Config.views.templateFolder + '/view.home.html', function (response) {
				$(that.el).find('#box-content').append(response);
			});

			return that;
		}
	});

	App.Views.HomeView = Home;

})(window.App.Components.MainLayout); 