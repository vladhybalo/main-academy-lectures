let arr = [1, 0, undefined, 512, 7, false, null, "", 5, 89, '0', 'false', !NaN, {}, [12,3]];

let filteredArray = arr.filter(elem => elem);

console.log(filteredArray);

let a = 0;

const counter = arr.reduce((accum, elem) => {
    if(elem) {
        return ++accum;
    }

    return accum;
}, 0);

console.log(counter);

let counter = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i]){
        counter++;
    }
}

const counter = arr.reduce((acc, elem) => {
    if(elem) { 
        return acc++
    } else{ 
        return 'acc';
    }
}, 0);


const filteredArray2 = arr.reduce((acc, elem) => {
    if(elem) {
        acc.push(elem + 1);
    } 

    return acc;
}, []);


arr.sort();

[1,2,3].concat([4,5])
//[1, 2, 3, 4, 5]

// arguments

function sum(a,b) {
    console.log(arguments);


    //for();
   const arr = Array.from(arguments);
    console.log([...arguments]);
    return a + b;
}


const sum = (...restArr) => {
    // arguments // error
    console.log(restArr)
}

sum(1,2, 4, 234,3);


sum(...[1,2,3,4])