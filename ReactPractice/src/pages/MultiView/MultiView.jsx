import React, { Component, useState, useEffect } from 'react';
import "./MultiView.css";
import ItemCard from '../../components/ItemCard/ItemCard';
import Filter from '../../components/Filter/Filter';

import withLoader from '../../hocs/withLoader/withLoader';
import ProductsList from './ProductsList';
import Dropdown from '../../components/Dropdown/Dropdown';

const sortingOptions = [
  {id: 1, name: 'By popularity', sortingField: 'reviews'},
  {id: 2, name: 'By price',  sortingField: 'price'},
  {id: 3, name: 'By rating',  sortingField: 'rating'},
];

export function MultiView () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortingIndex, setSortingIndex] = useState(0);
  
    useEffect(() => {
        setLoading(true);
        fetchStorage();
    }, []);
  
  
    const fetchStorage = async () => {
      try{
        const storageProm = await fetch('http://localhost:3100/items/');
        if(storageProm.ok){
            const items = await storageProm.json();
  
            setProducts(items);
            console.log(items);
        }
      }
      catch{
        alert("something went wrong with storage data! Json data missing or server containing it is not running "
        + "set the json-server up!write in CMD: json-server --watch database.json --port 3100");
      } finally {
        setLoading(false);
      }
    };

    const onSelect = index => {
      setSortingIndex(index);

      const {sortingField} = sortingOptions[index];

      setProducts([...products].sort((pr1, pr2) => {
        console.log(pr1);
        console.log(pr2);
        if(pr1[sortingField] > pr2[sortingField]) {
          return 1;
        } else if(pr1[sortingField] < pr2[sortingField]) {
          return -1;
        }

        return 0;
      }))
    }

    return <section className='multi-page'>
        <div className='filters-column'>
            <div className='filters-title'>
                Goods filter
            </div>
            <Filter></Filter>
        </div>
        <div>
          <Dropdown options={sortingOptions} onSelect={onSelect} selectedIndex={sortingIndex}></Dropdown>
          <ProductsList products={products} loading={loading}></ProductsList>
        </div>
    </section>;
}

export default MultiView;