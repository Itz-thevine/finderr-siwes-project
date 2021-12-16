import { Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import './App.less'

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </div>
  );
}

export default App;
