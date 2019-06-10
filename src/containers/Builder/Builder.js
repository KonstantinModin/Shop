import React, { Component } from 'react';
import Burger from '../../components/Burger';

export default class Builder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
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