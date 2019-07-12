import React, { useEffect } from 'react';
import Layout from './components/Layout';
import Builder from './containers/Builder';
import Checkout from './containers/Checkout';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Orders from './containers/Orders';
import Auth from './containers/Auth';
import Logout from './containers/Auth/Logout';
import { authCheckState } from './store/actions';

function App(props) {
    const { isAuth } = props;

    useEffect(() => {
        console.log('app use effect');
        props.onTryAutoSignup();
    }, []);
    
    let routes = (
        <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={Builder} />
            <Redirect to="/" />
        </Switch>
    );

    if (isAuth) {
        routes = (
            <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} />
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
