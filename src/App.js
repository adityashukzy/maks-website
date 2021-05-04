import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import Page from './pages/page';
import { Redirect, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/admin' exact component={Page} />
        <Redirect from='/' to='/login' />
      </Switch>
    </div>
  );
}

export default App;
