const sum = (a, b) => a + b;

const checkParams = (func) => (...params) => {
    if(params.every(elem => typeof elem === 'Number')) {
        return func(...params);
    }

    return null;
}

checkParams(sum)(1,2);