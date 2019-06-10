import React, { Component } from 'react';
import Ingredient from './Ingredient';
import './Burger.css';


const Burger = ({ingredients}) => {

    const transformedIngredients = Object.keys(ingredients)
            .map(igKey => [...Array(ingredients[igKey])]
            .map((_, i) => <Ingredient key={igKey + i} type={igKey} />
    ));
    
    return (
        <div className="Burger">
            Burger Component
            <Ingredient type="bread-top"/>
            {transformedIngredients}
            <Ingredient type="bread-bottom"/>
        </div>
    )    
}

export default Burger