import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/';
import NavigationItems from '../Items';
import Backdrop from '../../UI/Backdrop';

const SideDrawer = (props) => {
    const classes = ['SideDrawer'].concat(props.open ? 'Open' : 'Close').join` `;
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={classes}>
                <Logo st={{height: '11%'}}/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    )
}

export default SideDrawer;

// , alignItems: 'center'
