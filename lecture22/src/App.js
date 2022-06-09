import logo from './logo.svg';
import './App.css';

import { Switch, Route, Link, withRouter, useHistory, useLocation } from 'react-router-dom';

import Home from './pages/Home/Home';
import More from './pages/More/More';

const pathnamesConfig = {
  home: '/'
}

function App({history, location}) {
  // const history = useHistory();
  // const location = useLocation();

  console.log(history);
  console.log(location);

  return (
    <div>
        <Switch>
          <Route exact path={pathnamesConfig.home}>
            <Home></Home>
          </Route>
          <Route path={'/more/:name'} component={More}>
          </Route>
        </Switch>

        <button onClick={() => {history.push('/')}}>
          Go home
        </button>
        <div>
        <button onClick={() => {history.replace('/more/user1')}}>
          Go to more
        </button>
        </div>

        <button onClick={() => {history.goBack()}}>
          Go back
        </button>
    </div>
  );
}

export default withRouter(App);
