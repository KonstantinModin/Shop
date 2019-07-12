import React, { useEffect } from 'react';
import Layout from './components/Layout';
import Builder from './containers/Builder';
import Checkout from './containers/Checkout';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Orders from './containers/Orders';
import Auth from './containers/Auth';
import Logout from './containers/Auth/Logout';
import { authCheckState } from './store/actions';

function App(props) {
    useEffect(() => {
        console.log('app use effect');
        props.onTryAutoSignup();
    }, []);
    
    return (
    <div className="App">
        <Layout>            
            <Route path="/" exact component={Builder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/orders" component={Orders} />
        </Layout>
      
    </div>
  );
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(authCheckState())
    };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
