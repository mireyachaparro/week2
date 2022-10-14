//EcmaScript
//ES6 + ES2015 --- ES2022

//1 clase, 1 archivo, y para usar la clase (los console log) en el index u otro archivo
//hay que exportar las clases

export class Person {
    static isPerson(value) {
        return value instanceof Object;
    }

    constructor(name = '', age = null) {
        this.name = name;
        this.age = age;
    }
    greetings(target = { name: 'bro' }) {
        console.log(
            `Hola ${target.name}, soy ${this.name} y tengo ${this.age}`
        );
    }
}
const p1 = new Person('Pepe', 33);
console.log(p1);
p1.greetings();
const p2 = new Person('elena', 34);
console.log(p2);
p2.greetings(p1);

class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
    greetings(target = { name: 'bro' }) {
        super.greetings(target);
        console.log(`y estudio ${this.course}`);
    }
}

const s1 = new Student('pepito', 12, 'primero');
console.log(s1);
s1.greetings(p2);
