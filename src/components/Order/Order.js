import React from 'react';
import './Order.css';

const Order = ({ingredients, price, date}) => {
    // console.log(date);
    
    // const myDate = [date.getDate() + date.getMonth(), date.getTime()];
    // const myDate = date.split`T`;
    const myDate = (new Date(date)).toUTCString();
    // console.log(myDate);


    const ingr = Object.entries(ingredients)
        .filter(i => i[1] > 0)
        .map(([a, b]) => <span key={a}> {a} ( {b} )</span>);    
    
    return (
        <div className="Order">
            <h3>Date of order: {myDate.slice(4, 16)},  Time of order: {myDate.slice(17, 25)}</h3>
            <h3>Ingredients: {ingr} </h3>
            <h3>Price: <strong>{price}$</strong></h3>
        </div>
    )
};

export default Order;
