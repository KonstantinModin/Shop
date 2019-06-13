import React from 'react';
import './Button.css';

const Button = ({clicked, children, btnType}) => 
    <button 
        onClick={clicked} 
        className={['Button', btnType].join` `}>
        {children}
    </button>

export default Button