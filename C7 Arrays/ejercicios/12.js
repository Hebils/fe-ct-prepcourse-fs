function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var upper = array.map(element => {

    return element.toUpperCase();
  })

  return upper;
}

module.exports = convertirStringAMayusculas;
