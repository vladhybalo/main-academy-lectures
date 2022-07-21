import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        return await response.json();
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {products: [], loading: false},
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        deleteProduct: (state, action) => {
            state.products.pop();
        }
    },
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.products.push(action.payload);
            state.loading = false;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.loading = false;
        }
    }
});

export const {addProduct, deleteProduct} = productsSlice.actions;// {addProduct: () =>{}, deleteProduct}

export default productsSlice.reducer;