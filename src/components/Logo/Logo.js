import React from 'react';
import image from '../../assets/images/burger-logo.png';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({st}) => {
    return (
        <Link to="/" className="Logo" style={st}>
            <img src={image} alt="MyBurger"/>            
        </Link>
    )
}

export default Logo;
