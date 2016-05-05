(function (MenuComponent) {
	
	
	var menu = new App.Views.PrincipalMenu();
	var a = menu.render();
	console.log(a.el);
	$("body").append(a.el);

})(window.App.Views.PrincipalMenu); 