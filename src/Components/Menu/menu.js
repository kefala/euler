(function (App) {
	
	"use strict";

	var PrincipalMenu = Backbone.View.extend({

		tagName: "div",

		className: "principal-menu",

		events: {
		},

		initialize: function() {
			var that = this;
			
		},

		render: function(selector) {
			$.get(App.Config.views.templateFolder + '/component.menu.html', function (response) {
				$(selector).append(response);
			});
			
			
			return this;
		}

	});

	App.Components.PrincipalMenu = PrincipalMenu;

})(window.App);