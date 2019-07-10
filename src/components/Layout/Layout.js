import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerHandler = (value) => {
        this.setState({showSideDrawer: value});
    }
    
    render() {
        return  (
            <>            
                <Toolbar isAuth={this.props.isAuth} openSideDraw={() => this.sideDrawerHandler(true)}/>
                <SideDrawer
                    isAuth={this.props.isAuth} 
                    open={this.state.showSideDrawer} 
                    closed={() => this.sideDrawerHandler(false)}/>
                    
                <main className="LayoutContent">
                    {this.props.children}                
                </main>
            </>
        )

    }
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    }
};

export default connect(mapStateToProps)(Layout);