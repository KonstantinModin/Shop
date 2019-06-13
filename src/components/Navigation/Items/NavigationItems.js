import React from 'react';
import './NavigationItems.css';

const NavigationItems = () => {
    const active = "burger";
    
    return (
        <ul className="NavigationItems">
           <li><a href="/" className={active === 'burger' ? "Active" : null}>Burger Builder</a></li> 
           <li><a href="/" className={active === 'checkout' ? "Active" : null}>Check-Out</a></li> 
        </ul>
    )
}

export default NavigationItems;
