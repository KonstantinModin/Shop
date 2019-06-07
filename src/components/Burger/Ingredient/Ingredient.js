import React from 'react';
import './Ingredient.css';
import PropTypes from 'prop-types';

const Ingredient = ({ type }) => type === 'bread-top' ? (
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
        ) : type ? <div className={type === 'bread-bottom' ? 'BreadBottom' : 
                                   type === 'meat' ? 'Meat' : 
                                   type === 'cheese' ? 'Cheese' :
                                   type === 'salad' ? 'Salad' : 'Bacon'}></div> : null
Ingredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default Ingredient;

    // switch (props.type) {
    //     case 'bread-bottom': ingredient = <div className="BreadBottom"></div>;
    //         break;
    //     case 'bread-top': ingredient = (
    //         <div className="BreadTop">
    //             <div className="Seeds1"></div>
    //             <div className="Seeds2"></div>
    //         </div>
    //     );
    //         break;
    //     case 'meat': ingredient = <div className="Meat"></div>;
    //         break;
    //     case 'cheese': ingredient = <div className="Cheese"></div>;
    //         break;
    //     case 'salad': ingredient = <div className="Salad"></div>;
    //         break;
    //     case 'bacon': ingredient = <div className="Bacon"></div>;
    //         break;
    //     default: ingredient = null;
    // return ingredient;
    // }