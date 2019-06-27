import React from 'react';
import './Order.css';

const Order = (props) => {
    const myDate = props.date.split`T`;
    const ingr = Object.entries(props.ingredients)
        .filter((i) => i[1] > 0)
        .map((i) => <span key={i[0]}>{i[0]}: {i[1]}</span>);
    // console.log('ingr :', ingr);
    
    return (
        <div className="Order">
            <h3>Date of order: {myDate[0]},  Time of order: {myDate[1].slice(0, 5)}</h3>
            <h3>Ingredients: {ingr} </h3>
            <h3>Price: <strong>{props.price}$</strong></h3>
        </div>
    )
}

export default Order;
