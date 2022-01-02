import { Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Products from './pages/Products/Products'
import Services from './pages/Services/Services'
import Navbar from './components/Navbar/Navbar'
import MobileNav from './components/Navbar/MobileNavbar/Slider'
import './App.css'

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
        <MobileNav />
      </div>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/products' exact component={Products} />
        <Route path='/services' exact component={Services} />
      </Switch>
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
