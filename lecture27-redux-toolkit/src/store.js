import {configureStore } from '@reduxjs/toolkit';

import productsReducer from './reducers/products';
import localStorageMiddleware from './middlewares/localStorageMiddleware';

const store = configureStore({
    reducer: {
        products: productsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;