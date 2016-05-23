(function (MainLayout) {
	
	"use strict";

	var Problem = Backbone.View.extend({

		tagName: "div",

		className: "box-container",

		events: {
		},

		initialize: function () {
			var that = this;
			that.main = new MainLayout();
		},

		render: function () {
			var that = this;
			var rMain = that.main.render();
			that.$el.html(rMain.el);

			$.get(App.Config.views.templateFolder + '/view.problemOne.html', function (response) {
				$(that.el).find('#box-content').append(response);
			});

			return that;
		}
	});

	App.Views.ProblemOne = Problem;

})(window.App.Components.MainLayout); 