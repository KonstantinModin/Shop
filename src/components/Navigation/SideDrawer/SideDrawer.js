import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/';
import NavigationItems from '../Items';

const SideDrawer = () => {
    return (
        <div className="SideDrawer">
            <Logo height="11%"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer;
