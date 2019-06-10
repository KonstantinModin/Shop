import React, { Component } from 'react';
import Ingredient from './Ingredient';
import './Burger.css';


export default class Burger extends Component {

    render() {
        console.log('typeof <Ingredient/> :', <Ingredient/>);
        return (
            <div className="Burger">
                Burger Component
                <Ingredient type="bread-top"/>
                <Ingredient type="cheese"/>
                <Ingredient type="salad"/>
                <Ingredient type="meet"/>
                <Ingredient type="bread-bottom"/>
                

            </div>
        )
    }
}
