import { Switch, Route, withRouter } from "react-router-dom";
import { compose } from 'redux'
import { connect } from 'react-redux'
import './App.css';

import { checkUser } from './actions/user-actions'

import NavBar from './components/utilities/NavBar'

//! pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'

function App(props) {
  
  if (localStorage.getItem("isLoggedIn")) {
    props.checkUser()
  }

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

// export default withRouter(App);

const mapStateToProps = (state) => {
  console.log("app.js", state);
}

const mapDispatchToProps = {
  checkUser
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App)