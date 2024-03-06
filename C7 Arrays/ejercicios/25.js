function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
 var num = Array.from(numeros);


 var Par = num.filter(element => element % 2 === 0)

 return Par.length;
}

module.exports = contarParesConContinue;
