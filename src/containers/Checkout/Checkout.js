import React, { useEffect } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from './ContactData';
import { Route } from 'react-router-dom';
import './Checkout.css';

const Checkout = (props) => {    

    const ingredients = Object.assign({}, props.location.state[0]);
    const price = props.location.state[1];

    const checkoutCancelledHandler = () => {
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data', [ingredients, price]);
    } 

    useEffect(() => {
        console.log('ingredients :', ingredients);
        console.log('props.location.state', props.location.state);
    });

    return (
        <div className="Checkout">
            <CheckoutSummary 
                ingredients={ingredients}
                price={price}
                checkoutContinued={checkoutContinuedHandler}
                checkoutCancelled={checkoutCancelledHandler} />
            <Route path={props.match.path + '/contact-data'} component={ContactData} />
        </div>
    )
}

export default Checkout;
