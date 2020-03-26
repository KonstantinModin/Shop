import React, { useState } from "react";
import { connect } from "react-redux";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/";

const Layout = ({ isAuth, children }) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerHandler = value => setShowSideDrawer(value);

    return (
        <>
            <Toolbar
                isAuth={isAuth}
                openSideDraw={() => sideDrawerHandler(true)}
            />
            <SideDrawer
                isAuth={isAuth}
                open={showSideDrawer}
                closed={() => sideDrawerHandler(false)}
            />

            <main className="LayoutContent">{children}</main>
        </>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);
