(function (App) {

	"use strict";

	var PrincipalMenu = Backbone.View.extend({

		tagName: "div",

		className: "principal-menu",

		events: {
		},

		initialize: function () {
		},
		getRoutes: function () {
			var routes = [
				{ number: "Propuesta", url: "", template: "", type: "about" },
				{ number: 1, url: "problem/1", template: "", type: "problem" }
			];
			return routes;
		},
				
		pushMenu: function (selector) {
			var output,
				routes = this.getRoutes(),
				that = this;

			$.get(App.Config.views.templateFolder + '/component.menu.html', function (response) {
				output = Mustache.render(response, {
					routes: routes,
					"caption": function () {
						var caption;
						if (this.type === "problem") caption = "Problema " + this.number;
						if (this.type === "about") caption = this.number;
						return caption;
					},
					"slug": function () {
						return "#" + this.url;
					},
					"isActive": function () {
						var ret = false;
						if (this.type === "about" && location.hash === "") ret = true;
						if (this.type === "about" && location.hash === "#") ret = true;
						if (this.type === "problem" && location.hash === "#problema/" + this.number) ret = true;
						return ret;
					}
				});

				$(selector).append(output);
				$(selector).find('.collection-item').click(function (e) {
					$(selector).find('.collection-item').removeClass('active');
					$(this).addClass('active');
				}); 

			});
		},

		render: function (selector) {
			var that = this;

			if (!$(selector).find("#menu-content").length) {
				this.pushMenu(selector);
			}

			return this;
		}

	});

	App.Components.PrincipalMenu = PrincipalMenu;

})(window.App);