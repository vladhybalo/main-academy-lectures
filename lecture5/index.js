// const a = prompt();

// if(a) {
//     function f() {
//         console.log('Hi Yarik!');
//     }
// }

// f();

const football = {
    id1: {
        name: 'Chalsee & Dynamo'
    },
    id2: {
        name: 'Shakhtar & Nyva'
    },
    barsa: {
        name: 'Barsa & Manchester'
    }
};

// for in
for(const key in football) {
    console.log(football[key]);
}

const arr = [1,23,4,5,6,434];

// for of
for(const elem of arr) {
    console.log(elem);
}

// Map
const b = {name: 'Adrii'};
b.age = 11;

const map = new Map([
    ['name', 'Adrii']
]);

console.log(map);

map.set('age', 11);
console.log(map);

for(const [key, value] of map) {
    console.log(value)
}

const set = new Set([1, 2, 3, 2,3, 1, 5, {}, {}, []]);
console.log(set);

const a = [1, 2, 3, 2, 3, 1, 5];

const d = {};
let e = d;

// d === e - true

// {} === {} - false
// {a: 1} === {a: 1} - false

const num = 10 / 3;

Math.floor(num); // до найменшого числа

Math.round(num); // to closest int

Math.ceil(num); // to bigest int

Math.trunc(num); // remove float

Math.random(); // 0 - 0.(9)

const studentsNumber = 8;

Math.floor(Math.random() * 8) + 1;

Math.min(1,2,4,5, -400);
Math.max(1,2,4,5, -400);

'Hello'.toLowerCase();
'Hello'.toUpperCase();

'hello' > 'Hello'

[1,2,3,4,5,3].indexOf(3); // 3
[1,2,3,4,5,3].lastIndexOf(3); // 6
[1,2,3,4,5].indexOf(32323); // -1

arr.indexOf(1231231) === -1

arr.includes(3); 

[{}, []].includes({}); // false

const arr1 = [1,2,3,4,5,3];

// just interate
arr1.forEach((elem) => {
    console.log(elem);
});

const strs = ['a', 'b', 'c'];
const sum = strs.reduce((result, elem) => {
    console.log(elem);

    return result + elem;
});

console.log(sum);

console.log(arr1.map(elem => elem + 1));
console.log(arr1);

const arr3 = [0, 3, 5, 0, 3];
console.log(arr3.filter(elem => elem !== 0));

const filteredElems = [{eng: 1.1}, {eng: 2.0}].filter(elem => elem.eng > 3);

filteredElems && Array.isArray(filteredElems) && filteredElems.length === 0

[{eng: 1.1, name: 'Mazda'}, {eng: 2.0, name: 'Audi'}].find(elem => elem.name === 'Maz22da');
[{eng: 1.1, name: 'Mazda'}, {eng: 2.0, name: 'Audi'}].findIndex(elem => elem.name === 'Maz22da');

[{eng: 1.1, name: 'Mazda'}, {eng: 2.0, name: 'Audi'}].some(elem => elem.eng < 1.5); // true
[{eng: 1.1, name: 'Mazda'}, {eng: 2.0, name: 'Audi'}].every(elem => elem.eng > 1.5); // false