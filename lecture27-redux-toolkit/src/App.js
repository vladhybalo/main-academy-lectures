import {Provider} from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

import store from './store';

import Products from './components/Products';

function App() {
  const [state, setState] = useState();
  useEffect(() => {
    setState(1)
  }, []);

 
  const saveProducts =  useCallback(() => {
    fetch('/products')
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Products key={1} onClick={saveProducts}></Products>
      </Provider>
    </div>
  );
}

export default App;
