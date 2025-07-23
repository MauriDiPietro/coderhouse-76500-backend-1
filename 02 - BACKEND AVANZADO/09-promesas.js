const divisionPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("No se puede dividir por 0");
    resolve(a / b);
  });
};

divisionPromesa(1, 0)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
