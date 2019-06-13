import React from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar';

const Layout = (props) => {
    return  (
        <>            
            <Toolbar />
            <main className="LayoutContent">
                {props.children}                
            </main>
        </>
    )
}

export default Layout;