function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var max = array[0];

  for (i = 1; i < array.length; i++) {
    if (array[i] > max) 
        max = array[i]; 
} 

  if (array.length === 0){

    return 0;
  } else {
 
return array.indexOf(max); 
}
} 


module.exports = encontrarIndiceMayor;
