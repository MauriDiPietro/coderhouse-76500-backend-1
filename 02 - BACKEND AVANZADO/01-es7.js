/* -------------------------- operador exponencial -------------------------- */
const expMath = Math.pow(2, 3)  //2 * 2 * 2
// console.log(expMath);

const exponencial = 2 ** 3
// console.log(exponencial);

/* -------------------------------- includes -------------------------------- */
const array = [1,2,3,4,5,6,7,8];
// console.log(array.includes(5));
// console.log(array.includes(9));

const arrayNombres = [ 'juan', 'pedro', 'roman', 'luis' ]
// console.log(arrayNombres.includes('pedro'))

const personas = [
    { nombre: 'Juan', edad: 45 },
    { nombre: 'Alberto', edad: 64 },
    { nombre: 'Roberto', edad: 23 }
];

const existePersona = personas.some((persona)=>persona.edad === 23)

// console.log(existePersona);

const existePersona2 = personas.find((persona)=>persona.edad === 23)

console.log(existePersona2);
