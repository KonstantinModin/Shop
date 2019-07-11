import React from 'react';
import './NavigationItems.css';
import { NavLink } from 'react-router-dom';

const NavigationItems = ({ isAuth }) => {    
    return (
        <nav className="NavigationItems">
            <NavLink to="/" exact >Burger Builder</NavLink> 
            {isAuth && <NavLink to="/orders">Orders</NavLink>}
            {!isAuth ? <NavLink to="/auth">Auth</NavLink> : 
                <NavLink to="/logout">Logout</NavLink>} 
        </nav>
    )
}
export default NavigationItems;