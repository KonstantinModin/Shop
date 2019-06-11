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
            {controls.map(ctrl => 
                <Line key={ctrl.label} label={ctrl.label} type={ctrl.type} add={props.ingredientAdded} />)}
        </div>
    )
}

export default Controls
