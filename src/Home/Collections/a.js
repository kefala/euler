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


var a = 1, e = 0;
while (a > 4000) {
	e += fib(10000 * a);
}
