import React, { Component } from 'react';
import Burger from '../../components/Burger';
import Controls from '../../components/Burger/Controls';

export default class Builder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 1,
            meat: 1
        }
    }
    
    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients}/>
                <Controls />
            </>
        )
    }
}