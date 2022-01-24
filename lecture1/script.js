console.log('Hello, world!');

console.warn('You are wrong');

// alert('Its my popup');

let myName;
myName = 'Vlad';

let myEmail = 'vladhybalo@gmail.com';

myEmail = 'pupsik@gmail.com';

// alert(myEmail);
// alert('email');

const birthday = '20/12/1997';

// alert('Hello ' + myName);
// alert(`Hello    ${myName} and birthday ${birthday}`);

// dont work
// const PI ;
// PI = 3.14

// imporsible to reassign variable
// birthday = '22222'


const a = 11;
const b = 5;

const c = a + b;

const d = a - b;

const e = a ** b;

const g = 2 + 2 * 2;

// let age = 18;

// age += 1; // age = age + 1
// age /= 5;
// console.log(age);

const num = 11;
const str = '11';

const n = Number('1111'); // NaN

const m = n + 1;

const isMonday = true;

let youKnowJs = false;


//  2 years later

youKnowJs = true;

let surname; // undefined

myName = null;

//////
// alert(myName);

myName = 'Lokdok';

console.log(myName);

let age = null;

// age = 20;
age = Number(prompt('Enter you age'));

age += 1;

console.log(age);

const person = {
    name: 'Vlad', 
    surname: 'Hybalo', 
    age: 25, 
    isMaried: false, 
    knowJs: false, 
    adult: true, 
    birthday: null,
    passport: {
        num: 12346,
        seria: 'AB',
    }
};

console.log(person);
console.dir(person);

// Array

const list = [1,2,3,4,5];
const names = ['Vasia', 'Katia', 'Petia', myName, person];
const array = [1, '2', person, {}, true, []];

