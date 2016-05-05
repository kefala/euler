(function (App) {

	var PrincipalMenu = Backbone.View.extend({

		tagName: "menu",

		className: "principal-menu",

		template: null,

		events: {
		},

		initialize: function() {
		},

		render: function() {
			var that = this;

			$.get(App.Config.views.templateFolder + '/component.menu.html', function (response) {
				that.$el.html(response);
			});
			
			return that;

		}

	});

	App.Views.PrincipalMenu = PrincipalMenu;

})(window.App);