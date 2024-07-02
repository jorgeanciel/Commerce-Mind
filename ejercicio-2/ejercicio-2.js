function MostrarMultiplo(numero) {
  for (i = 1; i <= 100; i++) {
    if (i % numero === 0) {
      console.log(i);
    }
  }
}

//ejemplo de uso
let multiplo = 10;
MostrarMultiplo(multiplo);
