var i = 3, j = 5, sum = 0;

while (j < 1000) {
	sum = sum + i + j * (j % 3 !== 0);
	i = i + 3;
	j = j + 5;
}

while (i < 1000) {
	sum = sum + i;
	i = i + 3;
}


/********************************/

var i = 0, sum = 0;

while (i++ < 334) {
	sum += (i * 3) + ( (i < 200 && i % 3 != 0) * (i * 5) )
}


