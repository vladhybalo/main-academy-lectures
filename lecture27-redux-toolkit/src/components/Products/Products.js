import React, { useEffect, memo, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addProduct, deleteProduct, fetchProducts } from "../../reducers/products";

/*
    - state change
    - props change
    - context change
    - useSelector returned different value
    - forceUpdate
    - key

    - parent rerender
*/

const Products = (props) => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    console.log('rerender', products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const newPr = useMemo(() => {
        return products.map(product => {
            return {
                ...product,
                price: 1
            }
        });
    }, [products]);

    return <div>
        1
        <button onClick={() => {dispatch(addProduct({id: 1, name: 'Apple'}))}}>
            add product
        </button>
        <button onClick={() => {dispatch(deleteProduct())}}>
            remove product
        </button>
        <button>
            do nothing
        </button>
        {JSON.stringify(newPr)}
    </div>
};

export default memo(Products); // shouldComponentUpdate