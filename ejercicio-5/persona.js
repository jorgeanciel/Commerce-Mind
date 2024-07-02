class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  getDetalles() {
    console.log(
      `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`
    );
  }
}
//Crea el método getDetalles() el cual imprimirá en consola los atributos de la
//persona.
