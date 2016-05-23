(function (App) {

	var MainLayout = Backbone.View.extend({

		tagName: "main",

		className: "main-layout",

		events: {
		},

		initialize: function() {
			var that = this;
			$.get(App.Config.views.templateFolder + '/component.main.html', function (response) {
				that.$el.html(response);
			});
		},

		render: function() {
			return this;
		}

	});

	App.Components.MainLayout = MainLayout;

})(window.App);