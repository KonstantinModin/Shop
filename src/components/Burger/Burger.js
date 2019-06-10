import React, { Component } from 'react';
import Ingredient from './Ingredient';
import './Burger.css';


const Burger = ({ingredients}) => {

    let transformedIngredients = Object.keys(ingredients)
            .map(igKey => [...Array(ingredients[igKey])]
            .map((_, i) => <Ingredient key={igKey + i} type={igKey} />))
            .reduce((a, b) => [...a, ...b], []);
    
    console.log('transformedIngredients :', transformedIngredients);
    if (transformedIngredients.length === 0) transformedIngredients = <p>Please start adding ingredients!</p>;
    
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