function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  var array = new Array
  for(i = 0; i <= 9; i++){
    if (num === array.length){
      return 'Se interrumpió la ejecución';
      break;
    } else {
    num = num + 2;
    array[i] = num;
  }
  }

  return array;
}

module.exports = breakStatement;
