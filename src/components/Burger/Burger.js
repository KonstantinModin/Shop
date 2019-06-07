import React, { Component } from 'react';
import Ingredient from './Ingredient';


export default class Burger extends Component {

    render() {
        console.log('typeof <Ingredient/> :', <Ingredient/>);
        return (
            <div>
                Burger Component
                <Ingredient type="bread-top"/>
                <Ingredient type="cheese"/>
                <Ingredient type="salad"/>
                <Ingredient type="meet"/>
                <Ingredient type="bread-bottom"/>
                <Ingredient type={125}/>
                <Ingredient type=""/>

            </div>
        )
    }
}
