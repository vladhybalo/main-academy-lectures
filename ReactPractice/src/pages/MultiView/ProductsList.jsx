import React from "react";

import ItemCard from '../../components/ItemCard/ItemCard';
import withLoader from '../../hocs/withLoader/withLoader';

import "./MultiView.css";

const ProductList = ({products}) => {
    return <div className='shown-items'>
        {products.map(product => <ItemCard item={product} key={product.id} />)}
    </div> 
};

export default withLoader(ProductList);