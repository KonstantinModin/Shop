import React from 'react';
import Layout from './components/Layout';
import Builder from './containers/Builder';
import Checkout from './containers/Checkout';
import { Route } from 'react-router-dom';
import Orders from './containers/Orders';

function App() {    
    return (
    <div className="App">
        <Layout>            
            <Route path="/" exact component={Builder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
        </Layout>
      
    </div>
  );
}

export default App;
