/* --------------------------------- nullish -------------------------------- */
// 0, null, undefined, false, NaN, ''

let altura = 0;

// console.log(altura || 100);
// console.log(altura ?? 100);


/* ------------------------------------ variables privadas ----------------------------------- */

class Person{
    #fullname;
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        this.#fullname = `${this.firstname} ${this.lastname}`
    }

    getFullName = () => {
        return this.#fullname
    }
}

// console.log(Person.#fullname);
const inst = new Person('Juan', 'Perez')
console.log(inst.getFullName());
