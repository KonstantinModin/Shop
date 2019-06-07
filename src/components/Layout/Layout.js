import React from 'react';

const Layout = (props) => {
    return  (
        <>
            <div></div>
            <main>
                {props.children}
                Layout
            </main>
        </>
    )
}

export default Layout;