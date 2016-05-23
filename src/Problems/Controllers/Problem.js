(function () {

    "use strict";

    var dummieCollection = [
        {
            title: 'Problema uno',
            description: 'Describir el problema',
            id: 1,
            template: 'view.problema-uno.html'
        },
        {
            title: 'Problema dos',
            description: 'Describir el problema',
            id: 2,
            template: 'view.problema-dps.html'
        }
    ];

    function Problem() {

        this.getAll = function () {
            var problems = new App.Collections.Problem(dummieCollection);
            return problems;
        };

        return this;
    }




    window.App.Controllers.Problem = Problem;



})(); 