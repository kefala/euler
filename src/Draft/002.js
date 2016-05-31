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


