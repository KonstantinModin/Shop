import React from 'react';
import './Line.css';

const Line = (props) => {
    return (
        <div className="Line">
            <div className="Label">{props.label}</div>
            <button className="Less">Less</button>   
            <button className="More">More</button>   
        </div>
    )
}

export default Line
