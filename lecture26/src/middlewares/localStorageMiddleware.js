import {ADD_PRODUCT} from '../reducers/products';

const localStorageMiddleware = (store) => (next) => (action) =>  {
    console.log(store.getState());

    next(action);

    if(action.type === ADD_PRODUCT) {
        console.log(store.getState())
        localStorage.setItem('products', JSON.stringify(store.getState().products));
    }
};

export default localStorageMiddleware;

