import React, { useState, useEffect, useMemo } from 'react';
import Burger from '../../components/Burger';
import Controls from '../../components/Burger/Controls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/';
import server from '../../axios-orders';
import Spinner from '../../components/UI/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';
import { connect } from 'react-redux';

import { handleIngredient, initIngredient, setAuthRedirectPath } from '../../store/actions';
import { purchaseInit } from '../../store/actions';


export const Builder = (props) => {
    const [buttonClicked, setButtonClicked ] = useState(false);
    
    useEffect(() => {
        props.initIngredient();
        props.purchaseInit();
    // eslint-disable-next-line
    }, []);


    const orderNowButtonHandler = (value) => {
        if (props.isAuth) {
            setButtonClicked(value);
        } else {
            props.onSetAuthRedirectPath('/checkout');
            props.history.push('/auth');
        }
    };

    const purchaseContinueHandler = () => {        
        // props.history.push('/checkout', [props.ingredients, props.totalPrice]);
        props.history.push('/checkout');
    };    
    
    const { ingredients, totalPrice, ingredientHandler, error, isAuth } = props;

    const disabledInfo = {...ingredients};
    for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] === 0;
    let canWeOrder = false;
    let orderSummary = null;       
    
    let burger = error ? <h1>Ingredients can't be loaded!</h1> : <Spinner />;

    if (ingredients) {
        canWeOrder = Object.values(ingredients).some(i => i > 0);
        // console.log('this in BurgerBuilder:', this);
        burger = <>
                    <Burger ingredients={ingredients}/>
                    <Controls
                        ingredientHandler={ingredientHandler}                    
                        disabled={disabledInfo}
                        price={totalPrice}
                        canWeOrder={canWeOrder}
                        orderNowButton={orderNowButtonHandler}
                        isAuth={isAuth} />
                </>;
        orderSummary = <OrderSummary 
        order={ingredients} 
        totalP={totalPrice}
        cancel={() => orderNowButtonHandler(false)}
        makeAdeal={purchaseContinueHandler}/>;
    }
    // if (state.loading) {
    //     orderSummary = <Spinner />
    // }

    return (
        <>
            {useMemo(() => (
                <Modal show={buttonClicked} modalClosed={() => orderNowButtonHandler(false)}>
                    {orderSummary}
                </Modal>
                // eslint-disable-next-line
                ), [buttonClicked, orderSummary]
            )}
            {burger}
        </>
    )
    
};

const mapStateToProps = state => {
    return {
        ingredients: state.builder.ingredients,
        totalPrice: state.builder.totalPrice,
        error: state.builder.error,
        isAuth: state.auth.token !== null
    };    
};

const mapDispatchToProps = dispatch => {
    return {
        ingredientHandler: (name, q) => dispatch(handleIngredient(name, q)),
        initIngredient: () => dispatch(initIngredient()),
        purchaseInit: () => dispatch(purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(setAuthRedirectPath(path))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Builder, server));



// ingredientHandler = (type, q) => {
//     const  {ingredients, totalPrice} = state;
    
//     const updatedIngredients = {...ingredients};
//     updatedIngredients[type] = ingredients[type] + q;
//     if (updatedIngredients[type] > - 1) {
//         const newPrice = totalPrice + INGREDIENT_PRICES[type] * q;
//         setState({ingredients: updatedIngredients, totalPrice: newPrice});
//     } 
// }