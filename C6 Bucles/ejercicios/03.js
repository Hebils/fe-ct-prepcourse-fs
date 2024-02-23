function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  switch (x > y) {
    case true:
      return x;
      break;
    case false:
      return y;
      break;
  }
}

module.exports = obtenerMayor;
