import { Switch, Route, withRouter } from "react-router-dom";
import './App.css';

import NavBar from './components/utilities/NavBar'

//! pages
import Home from './components/pages/Home'

function App(props) {
  
  return (
    // <div className="App">
    // </div>
    <>
      <NavBar />
      <Switch>
        <Route
          path="/"
          render={() => <Home />}
          /> 
      </Switch>
    </>
  );
}

export default withRouter(App);
