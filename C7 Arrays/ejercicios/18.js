function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sum = 0;
  var prom = 0;

  resultadosTest.forEach((element) => sum += element)

  prom = sum / resultadosTest.length;

  return prom;
}

module.exports = promedioResultadosTest;
