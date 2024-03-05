function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var allEqual = array.every(val => val === array[0]);

  return allEqual
}

module.exports = todosIguales;
