function saveAge(defaultValue = 18) {
    const age = +prompt('Get age', defaultValue);
    console.log(this)
    this.age = age;
}

// saveAge();

// const saveAge = () => {
//     const age = +prompt('Get age', 18);

//     this.age = age;
// }

const user = {
    name: 'VVl',
    email: 'vlad@ldf;ladk',

    presentation: () => {
        console.log('Hello, my name is ' + user.name);
    }
};

const bindedAge = saveAge.bind(user);

bindedAge(10);
saveAge.call(user, 10);
saveAge.apply(user, [10]);

// user.presentation();
// user.saveAge();

console.log(user)

const createUser = (name, email) => {
    return {
        name,
        email
    }
}

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    presentation = function() {
        console.log('Hello, my name is ' + this.name);
    }

    saveAge = () => {
        const age = +prompt('Get age', 18);
    
        this.age = age;
    }
}

const user1 = new User('VL', 'vla@dsdas');


user1.presentation()
user1.saveAge();

console.log(user1);

class Admin extends User {
    constructor(name, email) {
        super(name, email);
        this.admin = true;
    }
}

class SuperUser extends User {
    constructor(name, email) {
        super(name, email);
        this.admin = true;
    }

    editPost() {
        
    }

    presentation() {

    }
}

function getDate({year, month:m, day}) {
    return `year:${year}/month:${m}/day:${day}`;
}

const obj = {year: 2022, month: 11, day: 1};
console.log(getDate(obj)); 

// 1 Січня 1970
const date = new Date(10000000000000);
const date = new Date(2020, 2, 0);

Date.now();