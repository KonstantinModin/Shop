import React from 'react';
import './Ingredient.css';
import PropTypes from 'prop-types';

const Ingredient = ({ type }) => !type ? null : type === 'bread-top' ? (
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
        ) : <div className={type === 'bread-bottom' ? 'BreadBottom' : 
                                   type === 'meat' ? 'Meat' : 
                                   type === 'cheese' ? 'Cheese' :
                                   type === 'salad' ? 'Salad' : 'Bacon'}></div>
Ingredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default Ingredient;