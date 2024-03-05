function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var array2 = array.map(function(x){

    return x * array.indexOf(x);

  })

  return array2;
}

module.exports = multiplicarElementosPorIndice;
