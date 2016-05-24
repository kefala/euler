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
			var output,
				that = this;
			
			$.get(App.Config.views.templateFolder + '/view.problem.html', function (response) {
				var output = Mustache.render(response, {
					title: that.problem.get('title'),
					description: that.problem.get('description')
				});
				$(".main-layout").find('#box-content').html(output);
				
				$.get(App.Config.views.templateFolder + that.problem.get('template'), function (response) {
					$(".main-layout").find('.problem').html(response);
				});
				
			});

			return this;
		},
		setProblem: function () {

		}
	});

	App.Views.Problem = Problem;

})(window.App.Components.MainLayout); 