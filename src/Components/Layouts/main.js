(function (App) {
	
	"use strict";

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
			
			this.menu = new App.Components.PrincipalMenu();
			
		},

		render: function() {			
			this.menu.render('#box-side-bar');
			return this;
		}

	});

	App.Components.MainLayout = MainLayout;

})(window.App);