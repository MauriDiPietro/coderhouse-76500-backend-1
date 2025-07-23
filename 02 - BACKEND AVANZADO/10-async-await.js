const divisionPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("No se puede dividir por 0");
    resolve(a / b);
  });
};

const division = async(a,b)=>{
    try {
        return await divisionPromesa(a, b);
    } catch (error) {
        console.log(error);
    }
}

const test = async () => {
    console.log(await division(10, 0));
}

test();

const getApi = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(await response.json());
}

// getApi();