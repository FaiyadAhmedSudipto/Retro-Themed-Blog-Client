import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import AddEvents from './components/AddEvents/AddEvents';
import Management from './components/Management/Management';
import Admin from './components/Admin/Admin';
import RealAdminHome from './components/Admin/AdminHome/RealAdminHome';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Homecontrol/Home';
import CustomerPanel from './components/CustomerPanel/CustomerPanel';
import AddTechBlogs from './components/AddTechBlogs/AddTechBlogs';
import TechBlogsDetails from './components/TechBlogsDetails/TechBlogsDetails'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/customer">
            <CustomerPanel />
          </PrivateRoute>
          <PrivateRoute path="/management">
            <Management />
          </PrivateRoute>
          <PrivateRoute path="/addBlogs">
            <AddTechBlogs />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            {/* <Admin /> <AdminHome /> */}
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <TechBlogsDetails />
          </PrivateRoute>
          {/* <PrivateRoute path="/orders">
            <MyOrders />
          </PrivateRoute> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

    // https://github.com/codebucks27/React-responsive-navbar
  );
}

export default App;
