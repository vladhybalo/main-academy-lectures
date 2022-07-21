
const localStorageMiddleware = store => (next) => (action) => {
    console.log(action);
    next(action);

    switch(action.type) {
        case 'products/addProduct': {
            const products = store.getState().products;

            localStorage.setItem('products', JSON.stringify(products));
        }
    }
};

export default localStorageMiddleware;