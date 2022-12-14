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
import Profile from './pages/Profile/Profile';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import DashBoard from './pages/Admin/DashBoard/DashBoard';
import ShowTime from './pages/Admin/ShowTime/ShowTime';
import Films from './pages/Admin/Films/Films';
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import EditFilm from './pages/Admin/Films/EditFilm/EditFilm';

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
        <UserTemplate exact path='/register' Component={Register} />
        <HomeTemplate exact path='/profile' Component={Profile} />
        <AdminTemplate exact path='/admin' Component={DashBoard}/>
        <AdminTemplate exact path='/admin/films' Component={Films}/>
        <AdminTemplate exact path='/admin/films/addnew' Component={AddNew}/>
        <AdminTemplate exact path='/admin/films/editfilm/:id' Component={EditFilm}/>
        <AdminTemplate exact path='/admin/users' Component={DashBoard}/>
        <AdminTemplate exact path='/admin/showtimes' Component={ShowTime}/>
        <HomeTemplate exact path='/' Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
