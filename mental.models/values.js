const numbers = [3, 5, 6];
numbers[numbers.length] = 9;
console.log(numbers);
numbers.push(53);
console.log(numbers);

const myPush = (array, value) => {
    array[array.length] = value;
    array;
};
const data = [];
myPush(data, 'Pepa');
console.log(data);
