/*
var i = 0, sum = 0;

while (i++ < 333)
	sum += (3*i) + ( ((5*i) % 3 !== 0 && i < 200) * (5*i) );


function getMultiples(i) {
	return (3*i) + ( ((5*i) % 3 !== 0 && i < 200) * (5*i) );
}
function multiplesOf3And5(i = 0, sum = 0) {
	if (i++ < 333)
		return multiplesOf3And5(i, sum += getMultiples(i));
	else
		return sum;
}

multiplesOf3And5();





function fibo(n = 0) {
	if ( n === 0 || n === 1)
		return 1; 
	else 
		return fibo(n - 1) + fibo(n - 2);
}

function fn() {
	i = 0, suma = 0;
	while (i <= 10) {
		suma += fibo(i);
		i++;
	}
	return suma;
}

fn();










function ganador(a,b,c,d) {
	resultado = ([parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d)] >= 3) ? 1 : 0;
	
	return resultado;
	
}

function empate(a,b,c,d) {
	return parseInt(parseInt(a*b)+parseInt(c*d)) + parseInt(parseInt(a*c)+parseInt(b*d)) + parseInt(parseInt(a*d) + parseInt(b*c));
}

function init (a,b,c,d) {
	x = empate(a,b,c,d);

	if (x) {
		resultado = (parseInt(x) * parseInt(d)) + !x * ganador(a, b, c, d);
	}

	return (parseInt(x) * parseInt(d)) + !x * ganador(a, b, c, d);
}
*/































/*
function fibo(n = 0) {
	if (n === 0 || n === 1)
		return 1;
	else
		return fibo(n - 1) + fibo(n - 2);
}

function fn() {
	var i = 0, suma = 0;
	while (i <= 40) {
		suma += fibo(i);
		i++;
	}
	return suma;
}

fn();
*/
/*
var i = 0, suma = 0;
var actual = 1, anterior = 0, siguiente = 0;


while ((actual + anterior) < 4000000) {
	siguiente = actual + anterior;
	
	suma += (siguiente % 2 === 0)? siguiente :0;
	anterior = actual;
	actual = siguiente;
}

console.log(suma);



	4613732
*/



