let abracadabra = 'dfasfdsafads';

sayHi('Pasha', 'P', 12);
sayHi('Inna');
sayHi('Nastia');


sayHi();
// Function declaration
function sayHi(name = 'world', surname, age) {
    const localName = name || 'world';

    console.log('Hello ' + name + ' ' + abracadabra);
    console.log(`Hello ${name} ${abracadabra}`);
}

const arr = [1,2,3,5,4645,6,545];

// function expression
const findElem = function (number) {
    let index = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === number) {
            console.log('Found');
            console.log(index);

            return true;
        }
    }

    return false;
}

console.log(findElem);

findElem(5);
findElem(10);

sayHi();

// arrow function
const mult = (a, b) => {
    
    console.log();
    let n = null;
    //.....
    const result = a * b;

    return result;
}

console.log(mult(2, 2));

const add = (a,b) => a + b;

const add = (a,b) => {
    a + b;

    add(1 ,2);
}

const calc = (a,b) => {
    const defaultProcessor = () => {console.log('Unknown operation')};
    const sub = (a, b) => a - b;

    switch(op) {
        case '+':
            add(4, 1000);
            break;
        case '-':
            sub(4,1000);
            break;

        default:
            defaultProcessor();
    }
}


const arr = [-1000, 1,2,3,5,4645, -100000,6,545];
let smallest = arr[0];



// for(let index = 1; index < arr.length; index++)

let index = 1;
while(index < arr.length) {
    if(smallest > arr[index]) {
        smallest = arr[index];
    }

    index++;
}

do {
    console.log('hiiii');
} while(false)


const c = 'Hello';

const sayHello = () => {
    const c = 'Hi';

    console.log(c);
}

sayHello();

const name = 'Pasha';

const say = () => {
    const name = 'Vasia';

    const sayHi = () => {
        console.log(`Hi, ${name}`)
    }

    sayHi();
}

// continue - skip iteration

for(let i = 0; i < 10; i++) {
    if(i >= 4) {
       continue;
    }

    console.log(1);
    console.log('Hii');
}



// break - exit from cycle
for(let i = 0; i < 10; i++) {
    if(i >= 4) {
        break;
    }

    console.log(1);
    console.log('Hii');
}

// STRINGS

'abcd'.split('')
['a', 'b', 'c', 'd'].join('')