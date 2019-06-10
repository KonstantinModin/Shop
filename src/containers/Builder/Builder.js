import React, { Component } from 'react';
import Burger from '../../components/Burger';

export default class Builder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    
    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients}/>
                <div>Controls</div>
            </>
        )
    }
}