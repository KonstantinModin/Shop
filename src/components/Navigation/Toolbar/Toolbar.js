import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo';
import NavigationItems from '../Items/';

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>Menu</div>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>            
        </header>
    )
}

export default Toolbar;
