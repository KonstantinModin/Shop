import React from 'react';
import './Layout.css';

const Layout = (props) => {
    return  (
        <>
            <div>Toolbar, SideDrawer, BackDrop</div>
            <main className="LayoutContent">
                {props.children}
                Layout
            </main>
        </>
    )
}

export default Layout;