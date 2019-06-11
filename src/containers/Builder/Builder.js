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
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
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
        const updatedIngredients = {  ... this.state.ingredients};
        updatedIngredients[type] = this.state.ingredients[type] - 1;
        if (updatedIngredients[type] > -1) {
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        } 
    }
    
    render() {
        const disabledInfo = { ...this.state.ingredients};
        for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] === 0

        return (
            <>
                <Burger ingredients={this.state.ingredients}/>
                <Controls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo} />
            </>
        )
    }
}