function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var mayor = array.filter(function(x){

    return x > 10;
  })

  return mayor.length;
}

module.exports = contarElementosMayoresA10;
