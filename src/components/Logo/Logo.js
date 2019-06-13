import React from 'react';
import image from '../../assets/images/burger-logo.png';
import './Logo.css';

const Logo = ({st}) => {
    return (
        <div className="Logo" style={st}>
            <img src={image} alt="MyBurger"/>            
        </div>
    )
}

export default Logo;
