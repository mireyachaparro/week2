import { Person } from './es6.js';

export class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
    greetings(target = { name: 'bro' }) {
        super.greetings(target);
        console.log(`y estudio ${this.course}`);
    }
}
