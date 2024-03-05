function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var found = array.find((element) => element.length > 5);

  if (array[0].length === 5) {
    return array[0];
  } else {
  return found;
}
}

module.exports = obtenerPrimerStringLargo;
