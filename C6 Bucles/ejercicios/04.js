function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  switch (edad >= 18){
    case true:
      return 'Allowed';
      break;
    case false:
      return 'Not allowed';
      break;
}
}
module.exports = mayoriaDeEdad;
