function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var sum = 0;

  arrayOfNums.forEach((element) => sum += element);

  return sum;

}

module.exports = agregarNumeros;
