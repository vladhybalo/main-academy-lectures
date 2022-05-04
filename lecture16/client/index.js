localStorage.clear();

const getProducts = () => {
    // get
    const products = localStorage.getItem('products');
    if(products) {
        return JSON.parse(products);
    }

    fetch('http://localhost:3000/products')
        .then(response => {
            console.log(response);

            return response.json();
        })
        .then(result => {
            console.log(result);
            localStorage.setItem('products', JSON.stringify(result))           
        })
};

getProducts();

const sendProducts = async () => {
    // post
    const product = {id: 'newProduct', name: 'Apple'}
    const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(product)
    });

    console.log(response)

    const result = response.json();

    console.log(result);
};

sendProducts();

const updateCategories = async () => {
    const category = {id: 'c1', name: 'Sport2'};
    const response = await fetch('http://localhost:3000/categories/c1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    });

    console.log(response);
}

updateCategories();

const deleteCategory = async () => {
    const response = await fetch('http://localhost:3000/categories/id2', {
        method: 'DELETE'
    });

    console.log(response);
};

deleteCategory();

const addCategory = () => {
    const category = {name: 'Cars', id: Math.random()};

    fetch('http://localhost:3000/categories', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    });
};
console.log('dsd')

addCategory();