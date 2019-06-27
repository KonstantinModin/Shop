import React from 'react';
import Layout from './components/Layout';
import Builder from './containers/Builder';
import Checkout from './containers/Checkout';
import { Route } from 'react-router-dom';

function App() {    
    return (
    <div className="App">
        <Layout>            
            <Route path="/" exact component={Builder} />
            <Route path="/checkout" component={Checkout} />
        </Layout>
      
    </div>
  );
}

export default App;
