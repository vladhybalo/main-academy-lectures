import React from "react";
import {useStore, useSelector, useDispatch} from 'react-redux';
import {v4} from 'uuid';

import {addProduct, removeProduct} from '../../reducers/products';

const names = ['bannana', 'apple', 'carrot', 'orange', 'cuccumber', 'tomato'];

const Mev = () => {
    const store = useStore();
    const products = useSelector(state => state.products);// {products: []}
    const dispatch = useDispatch();

    const handleClick = () => {
        // action
        const product = {
                name: names[Math.floor(Math.random() * names.length)],// 0 - 1 * 6
                price: Math.round(Math.random() * 1000),
                id: v4()
        };
        // dispatcher
        dispatch(addProduct(product));
    };

    const fetchProducts = async () => {
        const response = await fetch('adsfgfsdh');

        if(response.ok) {
            const products = await response.json();

            dispatch({
                type: 'SAVE_PRODUCTS',
                products
            })
        }
    }

    return <div>
        <button onClick={handleClick}>
            Add product
        </button>
        products:
        <div>
            {products.map(({id, name, price}) => {
                return (
                    <div key={id}>
                        <h3>
                            {name} - {price}
                        </h3>
                        <button onClick={() => { dispatch(removeProduct(id)) }}>
                            remove
                        </button>
                    </div>
                )
            })}
        </div>
    </div>
};

export default Mev;