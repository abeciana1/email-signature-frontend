import { Switch, Route, withRouter } from "react-router-dom";
import './App.css';

import NavBar from './components/utilities/NavBar'

//! pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'

function App(props) {
  
  return (

    <>
      <NavBar />
      <Switch>
        <Route
          path="/signup"
          component={Signup}
        />
        <Route
          path="/login"
          component={Login}
        />
        <Route
          path="/contact"
          component={Contact}
        />
        <Route 
          path="/about"
          component={About}
        />
        <Route
          path="/"
          render={() => <Home />}
        />
      </Switch>
    </>
  );
}

export default withRouter(App);
