var i = 3, j = 5, sum = 0;

while (j < 1000) {
	sum += + i + j * (j % 3 !== 0);
	i += 3;
	j += 5;
}

while (i < 1000) {
	sum = sum + i;
	i += 3;
}

//233168

/*MOSTRAR LA SUMATORIA DE LOS MULTIPLOS DE 3 Y 5 DE 0  A 1000
EJ 3,5,6,9 SON LOS MULTIPLOS DE 0 A 12
*/

/*

*/

var i = 0, sum = 0;

while (i++ < 333)
	sum += (3*i) + ( ((5*i) % 3 !== 0 && i < 200) * (5*i) );

/******************************/
var i = 0, sum = 0;
while (i++ < 200)
	sum += (3*i) + ( ((5*i) % 3 !== 0 ) * (5*i));
while (i++ < 333)
	sum += (3*i);

/******************************/


var i = 0, sum = 0;

while (i++ < 333)
	sum += (3*i) + ( ((i % 3 !== 0) && (i < 200)) * (5*i) );


