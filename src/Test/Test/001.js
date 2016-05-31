describe("Problem one test", function () {

  it("Problem one, not ignore common multiples", function () {
    var i = 0, j = 0, suma = 0;

    while (j < 200) {
      suma = suma + (i * 3) + (j * 5); /*Vamos sumando solamente los múltiplos, el 1000 no está dentro del conjunto*/
      i++;
      j++;
    }

    while (i <= 333) { /*Continuamos con los múltiplos de 3 que quedan sumar*/
      suma = suma + (i * 3);
      i++;
    }

    expect(true).toBe(suma > 233168);
  });

  it("Problem one, exclude common multiples", function () {
    var i = 0, j = 0, suma = 0;

    while (j < 200) {
      if ((j * 5) % 3 === 0) {
        suma = suma + (i * 3);
      } else {
        suma = suma + (i * 3) + (j * 5);
      }
      i++;
      j++;
    }

    while (i <= 333) { /*Continuamos con los múltiplos de 3 que quedan sumar*/
      suma = suma + (i * 3);
      i++;
    }

    expect(233168).toBe(suma);
  });

  it("Problem one optimized", function () {
    var i = 0, suma = 0;

    while (i <= 333) {
      if ((i * 5) % 3 === 0 || i >= 200) {
        suma = suma + (i * 3);
      } else {
        suma = suma + (i * 3) + (i * 5);
      }
      i++;
    }
    expect(233168).toBe(suma);
  });

  it("Problem one more optimized", function () {
    var i = 0, suma = 0;

    while (i++ < 333)
      suma += (3 * i) + (((5 * i) % 3 !== 0 && i < 200) * (5 * i)); /*Si la condicion ((5*i) % 3 !== 0 && i < 200) es falsa retorna 0 si es verdadera 1*/

    expect(233168).toBe(suma);
  });

  it("Problem one functional", function () {
    function getMultiples(i) {
      return (3 * i) + (((5 * i) % 3 !== 0 && i < 200) * (5 * i));
    }
    function multiplesOf3And5(i, sum) {
      if (i++ < 333)
        return multiplesOf3And5(i, sum += getMultiples(i));

      return sum;
    }

    multiplesOf3And5(0, 0);
  });

});