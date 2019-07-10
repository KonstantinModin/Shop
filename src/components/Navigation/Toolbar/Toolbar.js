import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo';
import NavigationItems from '../Items/';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <DrawerToggle onClick={props.openSideDraw} />
            <Logo/>
            <nav className="DesktopOnly">
                <NavigationItems isAuth={props.isAuth}/>
            </nav>            
        </header>
    )
}

export default Toolbar;
