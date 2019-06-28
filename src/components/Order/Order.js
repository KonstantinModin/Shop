import React from 'react';
import './Order.css';

const Order = ({ingredients, price, date}) => {
    const myDate = date.split`T`;
    const ingr = Object.entries(ingredients)
        .filter(i => i[1] > 0)
        .map(([a, b]) => <span key={a}> {a} ( {b} )</span>);    
    
    return (
        <div className="Order">
            <h3>Date of order: {myDate[0]},  Time of order: {myDate[1].slice(0, 5)}</h3>
            <h3>Ingredients: {ingr} </h3>
            <h3>Price: <strong>{price}$</strong></h3>
        </div>
    )
}

export default Order;
