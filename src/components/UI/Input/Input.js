import React from 'react';
import './Input.css';

const Input = ({elementConfig, elementType, value, label, changed}) => {
    let inputElement = null;
    switch (elementType) {
        case ( 'input'): 
            inputElement = <input className="InputElement" {...elementConfig} value={value} onChange={changed} />;
            break;
        case ( 'textarea'): 
            inputElement = <textarea className="InputElement" {...elementConfig} value={value} onChange={changed} />;
            break;
        case ( 'select'): 
            inputElement = (
                <select className="InputElement" value={value} onChange={changed}>
                    {elementConfig.options.map((i) => (
                        <option key={i} value={i}>{i}</option>
                    ))}
                </select>);
            break;
        default: 
            inputElement = <input className="InputElement" {...elementConfig} value={value} onChange={changed} />;        
    }

    return (
        <div className="InputField">
            <label>{label}</label>
            {inputElement}
        </div>
    )
}

export default Input;
