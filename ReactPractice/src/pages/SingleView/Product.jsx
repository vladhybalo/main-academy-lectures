import React, {useState} from 'react';

import cartPic from "../../components/Header/HeaderRes/cart-icon.png";

import withLoader from '../../hocs/withLoader/withLoader';

import starPic from "./SingleRes/star-icon.png";
import scalesPic from "./SingleRes/scales-icon.png";
import likePic from "./SingleRes/like-icon.png";
import "./SingleView.css";

function Product({product}) {
    const [amount, setAmount] = useState(1);
    const [currentDesrTab, setDesrTab] = useState(0);


    if(!product) {
        return null;
    }
    console.log(product.tabs[currentDesrTab].text);

    return(
        <section className='item'>
            <div className='item__pic-info-set'>
                <div className='pic-info-set__pic-set'>
                    {
                        product.images.map((photo, i) => 
                             <div key={i} className = {i === 0 ?  'pic-set__main-image-wrapper' : "pic-set__image-wrapper"}>
                                <img src={photo}
                                className="pic-set__img" alt="item-another-photo" /> 
                            </div> )
                    }
                </div>
                <article className='pic-info-set__info-set'>
                    <div className='info-set__title-set'>
                        <div className='title-set__title-info'>
                            <div className='title-info__title-stars-set'>
                                <span className='title-stars-set__title'>
                                    {product.title}
                                </span>
                                <div className='title-info__title-stars-set'>
                                    {getRating(product.rating) }
                                </div>
                            </div>
                            {
                                product.available ? <span className='title-set__available'>Available</span> :
                                <span className='title-set__not-available'>Not available</span>
                            }
                        </div>
                        <div className='title-set__pic-set'>
                            <div className='title-set__pic-wrapper'>
                                <img src={scalesPic} alt="add-to-compare" />
                            </div>
                            <div className='title-set__pic-wrapper'>
                                <img src={likePic} alt="add-to-fav" />
                            </div>
                        </div>
                    </div> 
                    <div className='line'></div>
                    <div className='info-set__descrition-set'>
                        <li className='description-set__item'>
                            <span className='set-item__name' >Trademark:</span>
                            <span className='set-item__value' >{product.trademark}</span>
                        </li>
                        <li className='description-set__item'>
                            <span className='set-item__name' >Article:</span>
                            <span className='set-item__value' >{product.article}</span>
                        </li>
                        <li className='description-set__item'>
                            <span className='set-item__name' >Country of Origin:</span>
                            <span className='set-item__value' >{product.country}</span>
                        </li>
                        <li className='description-set__item'>
                            <span className='set-item__name' >Country of Origin:</span>
                            <span className='set-item__value' >{product.size}</span>
                        </li>
                    </div>
                    <div className='line'></div>
                    <div className='info-set__options'>
                        {getOptions(product.options)}
                    </div>
                    <div className='line'></div>
                    <div className='info-set__price-area'>
                        <div className='price-area__price-bonus-set'>
                            <span className='price-bonus__price'>
                                ${product.price} <span className='price-units'>per {product.units}</span>
                            </span>
                            <span>
                            + {product.bonuses } bonuses
                            </span>
                        </div>
                    </div>
                    <div className='buy-buttons-set'>
                        <div className='amount-to-buy-set'>
                            <button className='change-amount-but' onClick={() => { 
                                if(amount === 1){return}
                                    setAmount(amount - 1); 
                                }}>-</button>
                            <span className='current-amount'>{amount}</span>
                            <button className='change-amount-but' onClick={() => setAmount(amount + 1)}>+</button>
                        </div>
                        <button className='add-to-cart-but'>
                            Add to cart
                            <img className='add-to-cart__cart-pic' src = {cartPic}></img>
                        </button>
                        <button className='buy-in-one-click-but'>
                            Buy in one click
                        </button>
                    </div>
                </article>
            </div>
            <article className='item-description-tabs'>
                    <nav className='description-tabs__tabs-titles'>
                        {product.tabs.map( ({title, id}, i) => 
                            <div className='tabs__title-set' key={id}>
                                <span className='tabs-titles__title' key = {i + "tab"} onClick={() => setDesrTab(i)} >
                                    { currentDesrTab === i ? <strong>{title}</strong> : <>{title}</> }
                                </span>
                                {currentDesrTab === i && <div className='title-selected-bar'></div>}
                            </div>
                        )}
                    </nav>
                    <div className='line'></div>
                    <span className='item-description-tabs__text-container'>
                        {product.tabs[currentDesrTab].text}
                    </span>
            </article>
        </section>
    )

}

export default withLoader(Product);

const getRating = (num) => {

    let element = [];

    for(let i = 0; i < num; i++){
        element.push(<img src = {starPic} alt = "star" key = {Math.random()}/>);
    }

    return element;
}

const getOptions = (options) => {

    let rows = [];

    let keys = Object.keys(options);
    let values = Object.values(options);
    console.log(keys)
    console.log(values)

    for(let i = 0; i < keys.length; i++){
        let item = []

        item.push (<h1 className='options-title' key = {Math.random() * 100}>{keys[i]}</h1>);
        item.push(
            <select className='options'  key = {Math.random() * 100}>
                {values[i].map(x => <option key = {Math.random() * 100}>{x}</option>)}
            </select>
        ) 

        rows.push(<div key = {Math.random()} className='info-set__options-item'>{item}</div>);
        
    }

    return  rows;
}