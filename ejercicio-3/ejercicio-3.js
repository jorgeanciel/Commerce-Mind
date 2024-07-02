function letraRepetida(texto, letra) {
  let contador = 0;
  for (i = 0; i <= texto.length; i++) {
    if (texto[i] === letra) {
      contador++;
    }
  }

  return contador;
}

function llamarMetodo(texto, letra) {
  const numeroLetraRepetida = letraRepetida(texto, letra);
  console.log(
    `El caracter "${letra}" se repite ${numeroLetraRepetida} en el texto "${texto}"`
  );
}

//ejemplo de uso
const text = "hola como estas";
const letter = "o";
const resultado = letraRepetida(text, letter);
console.log(
  `El caracter "${letter}" se repite ${resultado} en el texto "${text}"`
);
