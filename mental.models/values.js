/*const myPop = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count++;
    }
    let penultima = count - 1;

    let newArray = [];

    for (let j = 0; j < penultima; j++) {
        myPush(newArray, array[j]);
    }
    console.log(newArray);
};

myPop(['pepe', 'pepa', 'pepon']);*/

//shift quita el primero
/*let unshiftArray = ['pepe', 'pepa', 'pepon'];
unshiftArray.shift();
console.log(unshiftArray);*/

const myPush = (array, value) => {
    array[array.length] = value;
    return array;
};

const myShift = () => {
    let array = ['pepe', 'pepa', 'pepon'];
    //let newArray = [];
    let count;
    let i;
    for (i = 0; i < array.length; i++) {
        count = count - 1;
    }
    console.log(array[count]);
};
myShift();
