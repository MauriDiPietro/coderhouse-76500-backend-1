const mostrarLista = (lista) => {
  if (!Array.isArray(lista)) return "No es un array";
  if (!lista.length) return "Lista vacía";
  return {
    lista,
    longitud: lista.length,
  };
};

const mostrarLista2 = (lista) => {
  if (!Array.isArray(lista)) return "No es un array";
  if (!lista.length) return "Lista vacía";
  return lista.map((x) => x);
};

const mostrarLista3 = (lista) => {
  if (!Array.isArray(lista)) return "No es un array";
  switch (lista.length) {
    case 0:
      return "Lista vacía";
      break;
    default:
      return lista.map((x) => x);
      break;
  }
};

console.log(mostrarLista3('hola'));
