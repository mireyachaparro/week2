function Person(name = '', age = null) {
    this.name = name;
    this.age = age;
}

Person.define = function () {
    console.log('las personas tenemos cerebro');
};

Person.prototype.greetings = function (target = 'tu') {
    console.log(`Hola ${target} soy ${this.name} y tengo ${this.age}`);
};

const p1 = new Person('pepe', 33);
const p2 = new Person('elena', 35);

p1.greetings();
p2.greetings(p1.name);
Person.define();
