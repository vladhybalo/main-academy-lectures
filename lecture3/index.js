
let mark = 60;
let result = null;

if (mark >= 60) {
    result = 'passsed';
} else {
    result = 'failed';
}

let o1 = 'p'

let mark1 = 60;
let attending = 90;
result = mark1 >= 60 && attending > 60 ? o1 : 'failed';

const person = {
    name: 'Vl',
    age: 111,
    sex: 'regular'
};

// crash
// person.pasport.seria
// undefined
person.pasport?.seria

'name' in person // true
person.hasOwnProperty('unknownProp'); // false

if(person.pasport) {
    person.pasport.seria
}

const seria = person.pasport && person.pasport.seria;

const operation = 'ADD';
let a, b;

switch(operation) {
    case 1:
        console.log('call to parents');
    case 2:
    case 3:
        console.log('You are ...');
        break;

    case 'sub': {
        console.log(2);

        break;
    }

    
    case 'ADD':
        result = a + b;
        console.log(result);
        break;

    default:
        console.log('Wrong operation');
}

if(value === 1) {

} else if(value === 2) {

}else if (value ==='ADD') {

} else {

}

let students = ['Pasha', 'Inna', 'Nastia'];

students.push('Yuriy');

console.log(students[0])
console.log(students[1])
console.log(students[2])
console.log(students[3])

let index = 0;

for(; index < students.length; index++) {
    console.log(students[0]);
}

let numbers = [2, 5, 18, 11, 23, 6, 1, 44];
let minNumber = numbers[0];

for(let index = 1; index < numbers.length; index++) {
    if(minNumber > numbers[index]) {
        minNumber = numbers[index];
    }
}
