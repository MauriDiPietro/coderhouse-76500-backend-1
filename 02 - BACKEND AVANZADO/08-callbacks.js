const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

const operacion = (parametro1, parametro2, funcioncb) => {
  return funcioncb(parametro1, parametro2);
};

console.log(operacion(5, 10, suma));
console.log(operacion(10, 2, resta));
console.log(operacion(10, 2, division));
console.log(operacion(5, 10, multiplicacion));


// setTimeout(() => {
//   console.log("Hola, soy un callback que se ejecuta después de 3 segundos");
// }, 3000);

// array.map((i) => i.id === id);
// array.filter((i) => i.id === id);
