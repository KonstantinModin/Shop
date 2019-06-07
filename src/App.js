import React from 'react';
import Layout from './components/Layout';
import Builder from './containers/Builder';

function App() {
  return (
    <div className="App">
        <Layout>
            <Builder/>
        </Layout>
      
    </div>
  );
}

export default App;
