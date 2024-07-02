function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100);
}

function esPar(numero) {
  return numero % 2 === 0;
}
function llamarFuncion() {
  for (i = 0; i <= 5; i++) {
    const numeroAleatorio = generarNumeroAleatorio();
    const resultado = esPar(numeroAleatorio) ? "par" : "impar";
    console.log(
      `numero generado ${numeroAleatorio} // el numero es ${resultado} `
    );
  }
}
console.log(llamarFuncion());
