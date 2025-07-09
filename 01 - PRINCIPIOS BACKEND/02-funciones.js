function saludar(name) {
  return `Hola ${name}`;
}

const saludar2 = (name) => {
  return `Hola ${name}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;

console.log(saludar3("Juan"));

/* ------------------------------------ - ----------------------------------- */

const array = [1, 2, 3, 4, 5];

const array2 = array.filter(x=> x > 2)

console.log(array2);

/* ------------------------------------ - ----------------------------------- */

let num = 0;
const function1 = () => {
    let num = 1;
    console.log(num);
}

/*

(((((())))))

*/

function1()