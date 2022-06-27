import React, { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import Product from './Product';
import "./SingleView.css";

function SingleView (props) {
    const {id} = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);



    const descriptionTabsConfig = [
        "Description",
        "Specifications",
        "Reviews",
        "Shipping"
    ];

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3100/product/${id}`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }

                throw new Error('fetch failed');
            })
            .then(product => {
                setProduct(product);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);


    return(
        <>
        <Product product={product} loading={loading}></Product>
        </>
    )

}

export default SingleView;

