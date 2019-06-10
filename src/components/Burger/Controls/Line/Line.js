import React from 'react';
import './Line.css';

const Line = (props) => {
    return (
        <div className="Line">
            <p className="Label">{props.label}</p>
            <button className="Less">Less</button>   
            <button className="More">More</button>   
        </div>
    )
}

export default Line
