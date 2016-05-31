//4613732


function fibonacci(numero) {
    var i = 1, anterior = 1, siguiente = 1, tmp;
    while (i++ < numero) {
        tmp = siguiente;
        siguiente = anterior + siguiente;
        anterior = tmp;
    }
    return siguiente;
}

var o = 1, suma = 0;
while (suma < 4000000) {
    suma += ((fibonacci(o) % 2) == 0) ? fibonacci(o) : 0;
    o++;
}
console.log(suma);



/***********/
function fibo(numero, actual, anterior, siguiente) {
    if (actual++ < numero) return fibo();
    return siguiente; 
}
fn();