import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from './ContactData';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Checkout.css';

const Checkout = ({ ingredients, price, match: {path}, history }) => {    
    
    const checkoutCancelledHandler = () => {
        history.goBack();
    };

    const checkoutContinuedHandler = () => {        
        history.replace('/checkout/contact-data');
    };    

    let summary = <Redirect to="/" />;
    if (ingredients) {
        summary = (
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
    return summary
}

const mapStateToProps = state => {
    return {
        ingredients: state.builder.ingredients,
        price: state.builder.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);
