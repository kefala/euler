(function (MenuComponent) {
	
	var Home = Backbone.View.extend({

		tagName: "div",

		className: "home-section",

		events: {
		},

		initialize: function() {
		},

		render: function() {
			var that = this;

			$.get(App.Config.views.templateFolder + '/view.home.html', function (response) {
				that.$el.html(response);
			});
			
			return that;

		}

	});

	/*
	function Home() {
		console.log("asfas");

		var menu = new MenuComponent();
		var rMenu = menu.render();

		console.log();
	}
	*/
	App.Views.HomeView = Home;

})(window.App.Components.PrincipalMenu); 