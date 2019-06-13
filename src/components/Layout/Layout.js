import React, { Component } from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/';

export default class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    
    sideDrawerHandler = (value) => {
        this.setState({showSideDrawer: value});
    }
    
    render() {
        return  (
            <>            
                <Toolbar openSideDraw={() => this.sideDrawerHandler(true)}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={() => this.sideDrawerHandler(false)}/>
                    
                <main className="LayoutContent">
                    {this.props.children}                
                </main>
            </>
        )

    }
}