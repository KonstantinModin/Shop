import React, { useEffect } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from './ContactData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './Checkout.css';

const Checkout = (props) => {    
    const { ingredients, price, match: {path}} = props;
    // const ingredients = Object.assign({}, props.location.state[0]);
    // const price = props.location.state[1];

    const checkoutCancelledHandler = () => {
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        // props.history.replace('/checkout/contact-data', [ingredients, price]);
        props.history.replace('/checkout/contact-data');
    } 

    useEffect(() => {
        console.log('ingredients in checkout from Redux :', ingredients);        
    });

    return (
        <div className="Checkout">
            <CheckoutSummary  
                ingredients={ingredients}
                price={price}
                checkoutContinued={checkoutContinuedHandler}
                checkoutCancelled={checkoutCancelledHandler} />
            <Route path={path + '/contact-data'} component={ContactData} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);
