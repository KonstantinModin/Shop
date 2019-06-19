import React from 'react';
import './Controls.css';
import Line from './Line/';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]

const Controls = (props) => {
    return (
        <div className="Controls">
            <div>Current price: <strong>{props.price.toFixed(2)}</strong> Euros</div>
            {controls.map(({label, type}) => 
                <Line 
                    key={label} 
                    label={label}
                    type={type}
                    action={props.ingredientHandler}                    
                    disabled={props.disabled[type]} />)}
            <button 
                className="OrderButton" 
                disabled={!props.canWeOrder}
                onClick={() => props.orderNowButton(true)}>Order Now</button>
        </div>
    )
}
export default Controls