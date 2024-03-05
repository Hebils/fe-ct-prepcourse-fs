function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   var int = Math.round(Math.random() * array.length);
   var random = array[int];
   
   if (array.length === 0) {
      return array[0];
   }
   return random;
}

module.exports = obtenerElementoAleatorio;
