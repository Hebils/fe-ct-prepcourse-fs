function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var mul = new Array
  for (i = 0; i <= 10; i++){

    mul[i] = 6 * i;

  }

  return mul;
}

module.exports = tablaDelSeis;
