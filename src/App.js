import { Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Register from './pages/Register/Register'
import Products from './pages/Products/Products'
import Services from './pages/Services/Services'
import ItemDetails from './pages/ItemDetails/ItemDetails'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/register' exact component={Register} />
        <Route path='/products' exact component={Products} />
        <Route path='/services' exact component={Services} />
        <Route path='/item_details/:id' exact component={ItemDetails} />
      </Switch>
    </div>
  );
}

export default App;
