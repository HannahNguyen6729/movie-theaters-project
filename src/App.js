import {createBrowserHistory} from 'history';
import { Route, Router, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import MovieDetail from './pages/MovieDetail/MovieDetail';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import UserTemplate from './templates/UserTemplate/UserTemplate';

export const history = createBrowserHistory();

function App() {
 
  return (
    <Router history={history}>
      <Switch >
        <HomeTemplate exact path='/home' Component={Home} />
        <HomeTemplate exact path='/contact' Component={Contact} />
        <HomeTemplate exact path='/news' Component={News} />
        <HomeTemplate exact path='/detail/:id' Component={MovieDetail} />
        <CheckoutTemplate exact path='/checkout/:id' Component={Checkout} />
        <UserTemplate exact path='/login' Component={Login} />
        {/* <Route exact path='/login' component={Login} /> */}
        <Route exact path='/register' component={Register} />
        <HomeTemplate exact path='/' Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
