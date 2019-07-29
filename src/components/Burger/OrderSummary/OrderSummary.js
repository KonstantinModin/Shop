import React from 'react';
import './OrderSummary.css';
import Button from '../../UI/Button/';
// import { Link } from 'react-router-dom';

const OrderSummary = ({order, totalP, cancel, makeAdeal}) => {    
    

    const summary = Object.keys(order).filter(i => order[i] > 0).map(i => (
        <li key={i}>
            <span style={{textTransform: 'capitalize'}}>{i}</span>: {order[i]}
        </li>));

    return (            
        <div className="OrderSummary">
            <h2>Your Order Total Price is </h2><h1>{totalP.toFixed(2)} $</h1>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {summary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={cancel}>CANCEL</Button>
            {/* <Link to="/checkout" exact> */}
            <Button btnType="Success" clicked={makeAdeal}>CONTINUE</Button>
            {/* </Link>     */}
        </div>
    )
    
};

export default OrderSummary;