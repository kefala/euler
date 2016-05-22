var i = 0, sum = 0;

while (i++ < 333)
	sum += (3*i) + ( ((5*i) % 3 !== 0 && i < 200) * (5*i) );

/****************/
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






































function fnFib(cont = 4) {
	if (cont === 0 || cont === 1) return 1;
	else if (cont === 2) return 2;
		else return (cont - 1) + (cont - 2);
}
function fib(i = 1, sum = 0) {
	if (i > 2000) return sum; 
	else return fib(i+1, sum += fnFib(i));
}







//var a = 1, e = 0;
/*
while (a > 4000) {
	e += fib(10000 * a);
}
*/


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