import React from 'react';
import './Controls.css';
import Line from './Line/';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]

const Controls = ({ price, ingredientHandler, disabled, canWeOrder, orderNowButton, isAuth }) => {
    return (
        <div className="Controls">
            <div>Current price: <strong>{price.toFixed(2)}</strong> Euros</div>
            {controls.map(({label, type}) => 
                <Line 
                    key={label} 
                    label={label}
                    type={type}
                    action={ingredientHandler}                    
                    disabled={disabled[type]} />)}
            <button 
                className="OrderButton" 
                disabled={!canWeOrder}
                onClick={() => orderNowButton(true)}>{isAuth ? 'Order Now' : 'Please Sign Up'}</button>
        </div>
    )
}

export default Controls;