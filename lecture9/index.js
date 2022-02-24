
// let name = 'Vl';

// name = 'Pasha';

// sayHi();

function saveName(name) {

    return function sayHi() {
        console.log('Hi', name);
    };
}

let name = 'Andrey';

const func = saveName('Dima');

func();

const makeCounter =  () => {
    let counter = 0;

    return function(){
        return ++counter;
    }
}

const count = makeCounter();

console.log(count());
console.log(count()); 

const count2 = makeCounter();

console.log(count2());


const temperature = () => {
    let sum = 0;
    
    return (num) => {
        return sum += num;
    }
}

const t = temperature(2);

console.log(t(-10));
console.log(t(2));

const newT = temperature(2);

console.log(newT(10));// 

const user = {name: 'Vlad', documents: null};


if(typeof documents === 'object' && user.documents) {
    user.documents.id;
}

const id = user.documents ? user.documents.id : null;

if(user.documents) {
    id = user.documents.id
} else {
    id = null
}

try {
    user.documents.id;
    console.log('Wont execute')

} catch(e) {
    console.log('', e);
}

console.log('After error')