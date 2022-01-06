import { Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Register from './pages/Register/Register'
import Products from './pages/Products/Products'
import Services from './pages/Services/Services'
import ItemDetails from './pages/ItemDetails/ItemDetails'
import wrapper from './hoc/FullPageWrapper'
import './App.css'

function App() {
  return (
    <Switch>
      <Route path='/' exact component={wrapper(LandingPage)} />
      <Route path='/register' exact component={Register} />
      <Route path='/products' exact component={wrapper(Products)} />
      <Route path='/services' exact component={wrapper(Services)} />
      <Route path='/item_details/:id' exact component={wrapper(ItemDetails)} />
    </Switch>
  );
}

export default App;
