/* ----------------------------- spread operator ---------------------------- */

const array = [1, 2, 34, 4, 6, 77, 7];
// console.log(...array);

// console.log(Math.min(...array));

const array2 = [...array, 100];

// console.log(array2);

const user = {
  firstname: "Carlos",
  lastname: "Rodriguez",
  email: "carlitos.r@mail.com",
  age: 45,
};

const userModif = {
  ...user,
  address: "Av. San Martin 456",
};

// console.log(userModif);

/* ----------------------------- -rest operator ----------------------------- */

const test = (a, b, ...otrosParametros) => {
  console.log(a);
  console.log(b);
  console.log(otrosParametros);
};

test(1, 2, true, "hola", { a: true });
