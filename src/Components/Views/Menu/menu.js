(function (App) {

	var PrincipalMenu = Backbone.View.extend({

		tagName: "div",

		className: "principal-menu",

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

	App.Components.PrincipalMenu = PrincipalMenu;

})(window.App);