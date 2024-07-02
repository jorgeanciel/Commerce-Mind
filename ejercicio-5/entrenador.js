class Entrenador extends Persona {
  constructor(nombre, apellido, edad, experiencia, idFederacion) {
    super(nombre, apellido, edad);
    this.experiencia = experiencia;
    this.idFederacion = idFederacion || this.generarIdFederacionAleatorio();
  }

  generarIdFederacionAleatorio() {
    return Math.floor(10000 + Math.random() * 90000); // Genera un número aleatorio de 5 dígitos
  }

  getDetalles() {
    super.getDetalles();
    console.log(`Experiencia: ${this.experiencia} años`);
    console.log(`ID de Federación: ${this.idFederacion}`);
  }
}

const entrenador1 = new Entrenador("Juan", "López", 45, 20);
entrenador1.getDetalles();
