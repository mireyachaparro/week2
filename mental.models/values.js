const person = {
    arms: '2',
};

const alumno = {
    course: 'coders',
    __proto__: person,
};
const pepe = {
    age: '23',
    __proto__: alumno,
};

Object.prototype.favorite = 'bacon'; //esta propiedad se añade en el ultimo objeto que es null
console.log(pepe.favorite);
const ernesto = {};
console.log(ernesto.favorite);
