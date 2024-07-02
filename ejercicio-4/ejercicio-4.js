function invertirArreglo(array) {
  let arregloInvertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arregloInvertido.push(array[i]);
  }
  return arregloInvertido;
}

function llamarFuncion(array) {
  const arregloFinal = invertirArreglo(array);
  console.log("Arreglo original:", array);
  console.log("Arreglo invertido:", arregloFinal);
}

//ejemplo de uso
const cadena = [7, 38, 10, "casa"];
const newArray = invertirArreglo(cadena);
console.log("Arreglo original :", cadena);
console.log("Arreglo invertido:", newArray);
