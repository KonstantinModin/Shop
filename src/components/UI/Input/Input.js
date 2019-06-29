import React from 'react';
import './Input.css';

const Input = ({elementConfig, elementType, value, label, changed, invalid, shouldValidate, touched}) => {
    let inputElement = null;
    let clss = ['InputElement'];
    if (invalid && shouldValidate && touched) clss.push('Invalid');

    switch (elementType) {
        case ( 'input'): 
            inputElement = <input className={clss.join` `} {...elementConfig} value={value} onChange={changed} />;
            break;
        case ( 'textarea'): 
            inputElement = <textarea className={clss.join` `} {...elementConfig} value={value} onChange={changed} />;
            break;
        case ( 'select'): 
            inputElement = (
                <select className={clss.join` `} value={value} onChange={changed}>
                    {elementConfig.options.map((i) => (
                        <option key={i} value={i}>{i}</option>
                    ))}
                </select>);
            break;
        default: 
            inputElement = <input className={clss.join` `} {...elementConfig} value={value} onChange={changed} />;        
    }

    return (
        <div className="InputField">
            <label>{label}</label>
            {inputElement}
        </div>
    )
}

export default Input;
