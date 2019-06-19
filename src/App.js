import React, {useState} from 'react';
import Layout from './components/Layout';
import Builder from './containers/Builder';

function App() {
    const [state, setState] = useState(true);

    return (
    <div className="App">
        <Layout>
            <button onClick={() => setState(!state)}>Remove Builder</button>
            {state && <Builder/>}
        </Layout>
      
    </div>
  );
}

export default App;
