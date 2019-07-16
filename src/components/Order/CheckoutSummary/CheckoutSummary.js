import React from 'react';
import './CheckoutSummary.css';
import Burger from '../../Burger';
import Button from '../../UI/Button';

const CheckoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div className="Burger">
                <Burger ingredients={props.ingredients}/>
            </div>
            <h2>The total price of your order is: {props.price.toFixed(2)}$</h2>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>
        </div>
    )
};

export default CheckoutSummary;
