const ventas = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

const productos = [];
let sumaTotal = 0;

for (const venta of ventas) {
  const claves = Object.keys(venta); //[jugos, panes, ....]
  const valores = Object.values(venta); //[1,2,3,5...]
  for (const clave of claves) {
    if (!productos.includes(clave)) {
      productos.push(clave);
    }
  }
  for (const valor of valores) {
    sumaTotal += valor;
  }
}

console.log(productos);

console.log(sumaTotal);
