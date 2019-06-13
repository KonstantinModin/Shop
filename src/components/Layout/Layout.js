import React from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/';

const Layout = (props) => {
    return  (
        <>            
            <Toolbar />
            <SideDrawer />
            <main className="LayoutContent">
                {props.children}                
            </main>
        </>
    )
}

export default Layout;