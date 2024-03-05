function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var PrimeArray = array.filter(function(x) {
    return x % 2 === 0;
 })

  return PrimeArray;
}

module.exports = filtrarNumerosPares;
