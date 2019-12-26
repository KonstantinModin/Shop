import React from 'react';
import './DrawerToggle.css';

const DrawerToggle = ({ onClick }) => {
    return (
        <div className="DrawerToggle" onClick={onClick}>
            <div></div>  
            <div></div>  
            <div></div>  
        </div>
    )
};

export default DrawerToggle;