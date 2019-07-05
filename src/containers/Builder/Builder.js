import React, { Component } from 'react';
import Burger from '../../components/Burger';
import Controls from '../../components/Burger/Controls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/';
import server from '../../axios-orders';
import Spinner from '../../components/UI/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';
import { connect } from 'react-redux';

import { handleIngredient, initIngredient } from '../../store/actions';


class Builder extends Component {
    state = {        
        buttonClicked: false        
    }

    componentDidMount() {
        this.props.initIngredient();
    }
    

    // ingredientHandler = (type, q) => {
    //     const  {ingredients, totalPrice} = this.state;
        
    //     const updatedIngredients = {...ingredients};
    //     updatedIngredients[type] = ingredients[type] + q;
    //     if (updatedIngredients[type] > - 1) {
    //         const newPrice = totalPrice + INGREDIENT_PRICES[type] * q;
    //         this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    //     } 
    // }
    
    orderNowButtonHandler = (value) => this.setState({buttonClicked: value});

    purchaseContinueHandler = () => {        
        // this.props.history.push('/checkout', [this.props.ingredients, this.props.totalPrice]);
        this.props.history.push('/checkout');
    }
    
    render() {
        const { buttonClicked } = this.state;
        const { ingredients, totalPrice, ingredientHandler, error } = this.props;

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
                            orderNowButton={this.orderNowButtonHandler} />
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
        error: state.builder.error
    };    
}

const mapDispatchToProps = dispatch => {
    return {
        ingredientHandler: (name, q) => dispatch(handleIngredient(name, q)),
        initIngredient: () => dispatch(initIngredient())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Builder, server));