import React, { Component } from 'react';
import Burger from '../../components/Burger';
import Controls from '../../components/Burger/Controls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

export default class Builder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 1,
            meat: 1
        },
        totalPrice: 2
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {  ... this.state.ingredients};
        updatedIngredients[type] = this.state.ingredients[type] + 1;
        const newPrice = INGREDIENT_PRICES[type] + this.state.totalPrice;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }

    removeIngredientHandler = (type) => {

    }
    
    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients}/>
                <Controls
                    ingredientAdded={this.addIngredientHandler} />
            </>
        )
    }
}