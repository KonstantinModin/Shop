import React from 'react';
import Layout from './components/Layout';
import Builder from './containers/Builder';
import Checkout from './containers/Checkout';
import { Route } from 'react-router-dom';
import Orders from './containers/Orders';
import Auth from './containers/Auth';
import Logout from './containers/Auth/Logout';

function App() {    
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
}

export default App;
