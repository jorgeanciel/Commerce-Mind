class Jugador extends Persona {
  constructor(nombre, apellido, edad, posicion) {
    super(nombre, apellido, edad);
    this.posicion = posicion;
  }

  getDetalles() {
    super.getDetalles();
    console.log(`Posicion: ${this.posicion}`);
  }
}

const jugador1 = new Jugador("Pedro", "Ávila", 22, "Volante");
jugador1.getDetalles();
