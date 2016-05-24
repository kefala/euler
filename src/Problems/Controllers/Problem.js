(function () {

    "use strict";

    var dummieCollection = [
        {
            title: 'Múltiplos de 3 o 5',
            description: 'Todos los números naturales menores que 10 que son múltimos de 3 o 5 son 3, 5, 6 y 9. La suma de ellos es 23. Encontrar la suma de todos los multimos de 3 o 5 menores a mil, considerando sumar una vez sola los común múltiplos.',
            id: 1,
            template: '/view.problem-one.html'
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