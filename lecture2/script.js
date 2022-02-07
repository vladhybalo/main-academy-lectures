let a = 1;

let b = a;

console.log(a);
console.log(b);

a += 5;

console.log(a);
console.log(b);

let person = {
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

console.log(typeof person);

let person2 = person;

console.log(person);
console.log(person2);

person.age = 30;

console.log(person);
console.log(person2);

const array = [];
const array2 = array;

array.push(12);

console.log(array);
console.log(array2);

let array3 = [15];
const array4 = [15];

array3 = [];

const a1 = 'fdsfsdfs' - 1;
// correct way to chech NaN
Number.isNaN(a1)

const a2 = '11';
const result = Number(a2) - 1; // 10

5 > 12; // false

5 >= 12; // false

5 <= 12; // true

5 <= 4; // false

5 == 4; // false

// not scrict
5 == '5'; // true

// strict
5 === '5'; // false

null === null; // true

null != undefined; // false
null !== undefined; // true

!true // false
!false // true

// 0 - false
// other number - true

!1 // true, then invert and false
!5 // true, then invert and false

Boolean(5); // true
Boolean(0); // false

!10 // convert to bool and then invert

23
/*
    1 - true
    2 - invert true -> false

 */

    // conditions

console.log(1);

const userName = 'aaa aaa';

const num = 100;

if(num < 10) {
    console.log('small number')
    console.log('Hello from conditions');

    if(!userName) {
        console.log('enter you name');
    }

} else if(num < 100) {
    console.log('normal');
} else if(num < 1000) {
    console.log('gigant');
} else {
    console.error('number not identified');
}

let c = 0;

if(operation === 'add') {
    c = a + b
} else if (operation === 'sub') {
    c = a - b;
} else if(operation === 'mult') {
    c = a * b;
}

if(
    person.passport && 
    person.isMaried && 
    person.knowJs && 
    person.age > 18 && 
    person.age < 30 
    // && 30 >= age >= 18
) {
    console.log('Wow')
}

if(
    person.age > 18 ||
    person.passport ||
    person.isMaried ||
    person.knowJs
) {
    console.log('Wow wow');
}

if((person.age > 18 || person.passport) && !person.knowJs) {

}

if(a + b > c && b + c > a && c + a > b) {
    console.log('Congrats');
}

1 + 1 * 2 - 2 + 3213 * 2
console.log(2);

