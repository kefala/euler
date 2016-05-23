(function () {
    var Problem = Backbone.Model.extend({
        defaults: {
            title: 'Problema Uno',
            description: 'Describir el problema',
            id: 1,
            template: 'view.problema-uno.html'
        }
    });

    var ProblemCollection = Backbone.Collection.extend({
        model: Problem
    });
    
    App.Collections.Problem = ProblemCollection;
    App.Models.Problem = Problem;   

})();