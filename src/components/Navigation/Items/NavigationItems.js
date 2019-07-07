import React from 'react';
import './NavigationItems.css';
import { NavLink } from 'react-router-dom';

const NavigationItems = () => {    
    return (
        <nav className="NavigationItems">
           <NavLink to="/" exact >Burger Builder</NavLink> 
           <NavLink to="/orders">Orders</NavLink> 
           <NavLink to="/auth">Auth</NavLink> 
        </nav>
    )
}
export default NavigationItems;