import React, { Component } from 'react';
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


class Builder extends Component {
    state = {        
        buttonClicked: false        
    }

    componentDidMount() {
        this.props.initIngredient();
        this.props.purchaseInit();
    }

    orderNowButtonHandler = (value) => {
        if (this.props.isAuth) {
            this.setState({buttonClicked: value});
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    };

    purchaseContinueHandler = () => {        
        // this.props.history.push('/checkout', [this.props.ingredients, this.props.totalPrice]);
        this.props.history.push('/checkout');
    }
    
    render() {
        const { buttonClicked } = this.state;
        const { ingredients, totalPrice, ingredientHandler, error, isAuth } = this.props;

        const disabledInfo = { ...ingredients};
        for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] === 0;
        let canWeOrder = false;
        let orderSummary = null;       
        
        let burger = error ? <h1>Ingredients can't be loaded!</h1> : <Spinner />;

        if (ingredients) {
            canWeOrder = Object.values(ingredients).some(i => i > 0);
            burger = <>
                        <Burger ingredients={ingredients}/>
                        <Controls
                            ingredientHandler={ingredientHandler}                    
                            disabled={disabledInfo}
                            price={totalPrice}
                            canWeOrder={canWeOrder}
                            orderNowButton={this.orderNowButtonHandler}
                            isAuth={isAuth} />
                    </>;
            orderSummary = <OrderSummary 
            order={ingredients} 
            totalP={totalPrice}
            cancel={() => this.orderNowButtonHandler(false)}
            makeAdeal={this.purchaseContinueHandler}/>;
        }
        // if (this.state.loading) {
        //     orderSummary = <Spinner />
        // }

        return (
            <>
                <Modal show={buttonClicked} modalClosed={() => this.orderNowButtonHandler(false)}>
                    {orderSummary}
                </Modal>
                {burger}
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        ingredients: state.builder.ingredients,
        totalPrice: state.builder.totalPrice,
        error: state.builder.error,
        isAuth: state.auth.token !== null
    };    
}

const mapDispatchToProps = dispatch => {
    return {
        ingredientHandler: (name, q) => dispatch(handleIngredient(name, q)),
        initIngredient: () => dispatch(initIngredient()),
        purchaseInit: () => dispatch(purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Builder, server));



// ingredientHandler = (type, q) => {
//     const  {ingredients, totalPrice} = this.state;
    
//     const updatedIngredients = {...ingredients};
//     updatedIngredients[type] = ingredients[type] + q;
//     if (updatedIngredients[type] > - 1) {
//         const newPrice = totalPrice + INGREDIENT_PRICES[type] * q;
//         this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
//     } 
// }