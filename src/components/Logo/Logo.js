import React from 'react';
import image from '../../assets/images/burger-logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="Logo">
            <img src={image} alt="MyBurger"/>            
        </div>
    )
}

export default Logo;
