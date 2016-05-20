(function (MenuComponent) {
	
	var Home = Backbone.View.extend({

		tagName: "div",

		className: "home-section view-kefala",

		events: {
		},

		components: [],

		initialize: function() {
			var menu = new MenuComponent();
			var rMenu = menu.render();
			this.components.push(rMenu);
		},

		render: function() {
			var that = this;

			$.get(App.Config.views.templateFolder + '/view.home.html', function (response) {
				that.$el.html(response);
				$('.menu-box').append(that.components[0].el);
			});
			
			return that;
		}
	});

	App.Views.HomeView = Home;

})(window.App.Components.PrincipalMenu); 