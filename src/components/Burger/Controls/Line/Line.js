import React from 'react';
import './Line.css';

const Line = ({ label, remove, add, disabled}) => {
    return (
        <div className="Line">
            <div className="Label">{label}</div>
            <button className="Less" onClick={remove} disabled={disabled}>Less</button>   
            <button className="More" onClick={add}>More</button>   
        </div>
    )
}

export default Line;
