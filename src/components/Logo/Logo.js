import React from 'react';
import image from '../../assets/images/burger-logo.png';
import './Logo.css';

const Logo = ({height}) => {
    return (
        <div className="Logo" style={{height: height}}>
            <img src={image} alt="MyBurger"/>            
        </div>
    )
}

export default Logo;
