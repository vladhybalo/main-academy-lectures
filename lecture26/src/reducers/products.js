
export const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const addProduct = (product) => {
   return {
        type: ADD_PRODUCT,
        product
    }
};

export const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    id
});


const productsReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_PRODUCT: {
            console.log(action.product);

            return [...state, action.product];
        }

        case REMOVE_PRODUCT: {
            console.log(action);

            const newState = [...state];

            const index = newState.findIndex(product => product.id === action.id);

            newState.splice(index, 1);

            return newState;
        }

        default:
            return state;
    }
};

export default productsReducer;