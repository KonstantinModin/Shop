import React from 'react';
import './Line.css';

const Line = ({ label, disabled, action, type}) => {
    return (
        <div className="Line">
            <div className="Label">{label}</div>
            <button className="Less" onClick={() => action(type, -1)} disabled={disabled}>Less</button>   
            <button className="More" onClick={() => action(type, 1)}>More</button>   
        </div>
    )
}

export default Line;
