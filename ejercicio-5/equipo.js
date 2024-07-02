class Equipo {
  constructor(entrenador, jugadores) {
    this.entrenador = entrenador;
    this.jugadores = jugadores;
  }

  getDetalles() {
    console.log("Entrenador:");
    console.log(`Nombre: ${this.entrenador.nombre}`);
    console.log(`Apellido: ${this.entrenador.apellido}`);

    console.log("\nJugadores:");
    for (const jugador of this.jugadores) {
      console.log(`Nombre: ${jugador.nombre}`);
      console.log(`Posición: ${jugador.posicion}`);
    }
  }
}

const entrenador2 = new Entrenador("Juan", "López", 45, 20);

const jugadorY = new Jugador("Pedro", "Ávila", 22, "Volante");
const jugadorX = new Jugador("Ana", "García", 23, "Defensa");
const jugadorA = new Jugador("jorge", "chirinos", 28, "arquero");
const jugadorb = new Jugador("carlos", "alferez", 30, "delantero");

const listaJugadores = [];
listaJugadores.push(jugadorY);
listaJugadores.push(jugadorX);
listaJugadores.push(jugadorA);
listaJugadores.push(jugadorb);

const equipo1 = new Equipo(entrenador2, listaJugadores);
equipo1.getDetalles();
