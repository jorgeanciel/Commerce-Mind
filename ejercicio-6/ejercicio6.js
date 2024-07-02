function convertirCadena(cadena) {
  let cadenaNueva = "";
  let convertir = true;

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === ".") {
      convertir = false;
      cadenaNueva += cadena[i];
    } else {
      if (convertir) {
        cadenaNueva += cadena[i].toUpperCase();
      } else {
        cadenaNueva += cadena[i].toLowerCase();
      }
    }
  }

  return cadenaNueva;
}

function llamarFuncion(cadena) {
  let cadenaInicial = cadena;
  let cadenaConvertida = convertirCadena(cadenaInicial);

  console.log("Antes:", cadenaInicial);
  console.log("Despues:", cadenaConvertida);
}

// Ejemplo de uso
let cadena = "resolviendo. aprediendo mas";
console.log("Antes:", cadena);

let cadenaConvertida = convertirCadena(cadena);
console.log("Después:", cadenaConvertida);
