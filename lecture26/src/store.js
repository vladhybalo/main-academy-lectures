import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import productsReducer from "./reducers/products";
import localStorageMiddleware from "./middlewares/localStorageMiddleware";

const initialState = {
    products: [],

};

const store = legacy_createStore(
    combineReducers({
        products: productsReducer
    }),
    initialState,    
    composeWithDevTools(applyMiddleware(localStorageMiddleware))
);

export default store;