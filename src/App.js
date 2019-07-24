import React, { Component } from 'react';
import Layout from './components/Layout';
import Builder from './containers/Builder';
// import Checkout from './containers/Checkout';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import Orders from './containers/Orders';
// import Auth from './containers/Auth';
import Logout from './containers/Auth/Logout';
import { authCheckState } from './store/actions';
import asyncComponent from './hoc/asyncComponent';  //// LAZY LOADING


const asyncCheckout = asyncComponent(() => { //// LAZY LOADING
    return import('./containers/Checkout');  //// LAZY LOADING
});
const asyncOrders = asyncComponent(() => {   //// LAZY LOADING
    return import('./containers/Orders');    //// LAZY LOADING
});
const asyncAuth = asyncComponent(() => {     //// LAZY LOADING
    return import('./containers/Auth');      //// LAZY LOADING
});

class App extends Component {
    
    componentDidMount() {
        // console.log('app component did moun');
        this.props.onTryAutoSignup();
    };
    render() {
        const { isAuth } = this.props;
        
        let routes = (
            <Switch>
                <Route path="/auth" component={asyncAuth} />
                <Route path="/" exact component={Builder} />
                <Redirect to="/" />
            </Switch>
        );

        if (isAuth) {
            routes = (
                <Switch>
                    <Route path="/checkout" component={asyncCheckout} />
                    <Route path="/auth" component={asyncAuth} />
                    <Route path="/orders" component={asyncOrders} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" exact component={Builder} />
                    <Redirect to="/" />
                </Switch>
            )
        };
        
        return (
            <div className="App">
                <Layout> 
                    {/* <Route path="/" exact component={Builder} />
                    <Route path="/auth" component={Auth} />                
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/orders" component={Orders} /> */}

                    {routes}
                </Layout>        
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
