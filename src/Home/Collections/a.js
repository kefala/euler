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


*/

