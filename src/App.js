import { Switch, Route, withRouter } from "react-router-dom";
import './App.css';

import NavBar from './components/utilities/NavBar'

//! pages
import Home from './components/pages/Home'
import About from './components/pages/About'

function App(props) {
  
  return (

    <>
      <NavBar />
      <Switch>
        <Route 
          path="/about"
          // component={About}
          render={() => <About />}
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
