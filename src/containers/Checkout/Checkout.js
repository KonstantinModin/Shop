import React, { useState } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import './Checkout.css';

const Checkout = (props) => {
    // const [ingredients] = useState({
    //     salad: 1,
    //     meat: 1,
    //     cheese: 1,
    //     bacon: 1
    // });

    const checkoutCancelledHandler = () => {
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data');
    }

    console.log('props.location.state :', props.location.state);

    return (
        <div className="Checkout">
            <CheckoutSummary 
                ingredients={props.location.state}
                checkoutContinued={checkoutContinuedHandler}
                checkoutCancelled={checkoutCancelledHandler} />
        </div>
    )
}

export default Checkout;
