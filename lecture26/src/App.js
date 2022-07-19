import {Provider} from 'react-redux';

import store from './store';

import Mev from './components/Mev';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
        <Mev></Mev>
     </Provider>
    </div>
  );
}

export default App;
