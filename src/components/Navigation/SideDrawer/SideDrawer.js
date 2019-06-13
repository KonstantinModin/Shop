import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/';
import NavigationItems from '../Items';

const SideDrawer = () => {
    return (
        <div className="SideDrawer">
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer;
