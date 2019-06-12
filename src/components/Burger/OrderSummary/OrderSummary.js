import React from 'react';
import './OrderSummary.css'

const OrderSummary = ({order}) => {
    console.log(order);
    const summary = Object.keys(order).filter(i => order[i] > 0).map(i => (
        <li key={i}>
            <span style={{textTransform: 'capitalize'}}>{i}</span>: {order[i]}
        </li>));
    return (
        <div className="OrderSummary">
            <h2>Your Order</h2>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {summary}
            </ul>
            <p>Continue to Checkout?</p>
        </div>
    )
}

export default OrderSummary
