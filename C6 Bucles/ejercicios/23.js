function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let x = num;
    let contador = 0;
    
    do {
        x += 5;
        contador++;
    } while (contador < 8 && x <= num + 5 * 8);

    return x;
}

module.exports = doWhile;