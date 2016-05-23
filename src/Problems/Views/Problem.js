(function (MainLayout) {

	"use strict";

	var Problem = Backbone.View.extend({

		tagName: "div",

		className: "box-container",

		events: {
		},

		initialize: function (problemId) {
			if (!$(".main-layout").length) {
				var main = new MainLayout();
				var rMain = main.render();
			}
			var ProblemCtrl = new window.App.Controllers.Problem();
			var problems = ProblemCtrl.getAll();
			this.problem = problems.get(problemId);
		},

		render: function () {
			var output, that = this;
			console.log(that.problem);
			$.get(App.Config.views.templateFolder + '/view.problem.html', function (response) {
				var output = Mustache.render(response, {
					title: that.problem.get('title')
				});
				console.log(output);
				$(".main-layout").find('#box-content').html(output);
			});

			return this;
		},
		setProblem: function () {

		}
	});

	App.Views.Problem = Problem;

})(window.App.Components.MainLayout); 