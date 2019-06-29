import React from 'react';
import './Button.css';

const Button = ({clicked, children, btnType, enabled=true}) =>
    <button 
        onClick={clicked}
        disabled={!enabled} 
        className={['Button', btnType].join` `}>
        {children}
    </button>

export default Button