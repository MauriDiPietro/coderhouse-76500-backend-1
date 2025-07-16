class TicketManager {
  #precioBaseGanancia = 0.15;
  constructor() {
    this.eventos = [];
  }

  #generarId() {
    let maxId = 0;
    this.eventos.map((evento) => {
      if (evento.id > maxId) maxId = evento.id;
    });
    return maxId;
  }

  agregarEvento(
    nombre,
    ciudad,
    precio,
    capacidad = 500,
    fecha = new Date().toLocaleDateString()
  ) {
    const evento = {
      id: this.#generarId() + 1,
      nombre,
      ciudad,
      precio: precio + this.#precioBaseGanancia,
      capacidad,
      fecha,
      participantes: [],
    };
    this.eventos.push(evento);
  }

  obtenerEventos() {
    return this.eventos;
  }

  #obtenerEvento(id) {
    return this.eventos.find((evento) => evento.id === id);
  }

  agregarUsuario(idEvento, idUsuario) {
    const evento = this.#obtenerEvento(idEvento);
    if (!evento) return "Este evento no existe";
    if (!evento.participantes.includes(idUsuario))
      evento.participantes.push(idUsuario);
  }

  ponerEventoEnGira(idEvento, lugar, fecha) {
    const evento = this.#obtenerEvento(idEvento);
    if (!evento) return "Este evento no existe";
    const nuevoEvento = {
      ...evento,
      id: this.#generarId() + 1,
      lugar,
      fecha,
      participantes: [],
    };
    this.eventos.push(nuevoEvento);
  }
}


const ticketManager = new TicketManager();

ticketManager.agregarEvento('Argentina vs. Chile', 'Santiago del Estero', 200000, 75000);
ticketManager.agregarEvento('Recital Los Tipitos', 'Misiones', 200000, 75000);
ticketManager.agregarUsuario(1, 'Raul');
ticketManager.agregarUsuario(1, 'Lautaro')
ticketManager.agregarUsuario(2, 'Joserraul')
console.log(ticketManager.obtenerEventos());