function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  var Rep = [];

  for (i = 0; i < numeros.length; i++){

    if (Rep[numeros[i]] !== undefined){

      return numeros[i];

    } else {

      Rep[numeros[i]] = i;

    }
  }

  return undefined;

}

module.exports = encontrarElementoRepetido;