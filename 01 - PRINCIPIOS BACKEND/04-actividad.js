class Contador {
    constructor(nombre) {
        this.nombre = nombre;
        this.contador = 0;
    }
    
    static contadorGlobal = 0;

  getResponsable() {
    return this.nombre;
  }

  getCuentaGlobal() {
    return Contador.contadorGlobal;
  }

  getCuentaIndividual() {
    return this.contador;
  }

  contar() {
    Contador.contadorGlobal++;
    this.contador++;
  }
}

const cont1 = new Contador('Raul');
const cont2 = new Contador('Cristian')

console.log(cont1.getResponsable());

console.log(cont2.getResponsable());
/* ------------------------ sumar al contador de Raul ----------------------- */
cont1.contar()
cont1.contar()
console.log('cuenta de Raul', cont1.getCuentaIndividual());
console.log('cuenta global: ', Contador.contadorGlobal);
/* ---------------------- sumar al contador de Cristian --------------------- */
cont2.contar()
cont2.contar()
cont2.contar()
cont2.contar()
console.log('----se le suman 4 a Cristian------');

console.log('cuenta de Raul', cont1.getCuentaIndividual());
console.log('cuenta global: ', Contador.contadorGlobal);
console.log('cuenta de Cristian', cont2.getCuentaIndividual());





